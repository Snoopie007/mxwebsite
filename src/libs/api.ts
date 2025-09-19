
import axios from "axios"
import { createHash } from "crypto";
const api = axios.create({
    baseURL: process.env.MONSTRO_API_URL || "http://localhost:3001",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MONSTRO_API_KEY || ""}`
    }
})

const admin = axios.create({
    baseURL: process.env.ADMIN_URL || "http://localhost:3001",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MONSTRO_ADMIN_KEY || ""}`
    }
})


type FacebookPixel = { fbc: string, fbp: string, pathname: string }
type FacebookContact = { [key: string]: string | number }

async function FacebookLead(userAgent: string | null, ip: string, fb: FacebookPixel, contact: FacebookContact) {
    const hashedContact = Object.entries(contact).reduce(
        (acc, [key, value]) => ({ ...acc, [key]: createHash('sha256').update(String(value)).digest('hex') }), {})

    await fetch(`https://graph.facebook.com/v18.0/${process.env.FB_PIXEL}/events?access_token=${process.env.CONVERSION_API}`, {
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
                        ...hashedContact

                    },
                    custom_data: {
                        currency: "USD",
                        value: "1"
                    }
                }
            ],

        })
    })
}

function handleError(e: any) {
    if (axios.isAxiosError(e)) {
        console.error(e)
        return
    }
    console.error(e)
}

export {
    api,
    admin,
    FacebookLead
};