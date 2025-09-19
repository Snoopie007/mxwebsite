import { NextRequest, NextResponse } from "next/server"
import { createHash } from "crypto";
import { admin } from "@/libs/api";

export async function POST(req: NextRequest) {
    const ip = (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
    const userAgent = req.headers.get('user-agent')
    const { fb, contact } = await req.json();
    contact.phone = `+${contact.phone}`;

    try {
        if (fb) {
            const facebook = await fetch(`https://graph.facebook.com/v18.0/${process.env.FB_PIXEL}/events?access_token=${process.env.CONVERSION_API}`, {
                method: "post",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    data: [
                        {
                            event_name: "Lead",
                            event_time: Math.floor(+new Date() / 1000),
                            action_source: "website",
                            event_source_url: `https://www.mymonstro.com/${fb.pathname}`,
                            user_data: {
                                client_user_agent: userAgent,
                                client_ip_address: ip,
                                fbc: fb.fbc || "",
                                fbp: fb.fbp || "",
                                em: createHash('sha256').update(contact.email).digest('hex'),
                                ph: createHash('sha256').update(contact.phone).digest('hex'),
                                fn: createHash('sha256').update(contact.firstName.toLowerCase()).digest('hex'),
                                ln: createHash('sha256').update(contact.lastName.toLowerCase()).digest('hex'),
                            },
                            custom_data: {
                                currency: "USD",
                                value: "1"
                            }
                        }
                    ],

                })
            })
            await facebook.json()
        }

        const isUKUser = contact.phone.startsWith('+44');
        const mappedCustomFields = Object.entries(contact.customFields).map(([key, value]) => ({ key, field_value: value }))

        await admin.post('/api/public/website', {
            firstName: contact.firstName,
            lastName: contact.lastName,
            phone: contact.phone,
            email: contact.email,
            source: "Website Form",
            tags: ["new lead"],
            locationId: isUKUser ? "Lu5jNxxWygKP5kFP16Fc" : "KZiVLGj4ZfUh3oKvebul",
            customFields: mappedCustomFields
        });


        return NextResponse.json({
            message: 'Success',
            redirect: isUKUser ? '/book-demo/schedule/uk-demo' : '/book-demo/schedule/demo'
        }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Error' }, { status: 500 })
    }
}