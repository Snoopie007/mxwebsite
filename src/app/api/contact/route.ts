import { NextRequest, NextResponse } from "next/server";
import { admin } from "@/libs/api";

export async function POST(req: NextRequest) {

    const { contact } = await req.json();
    contact.phone = `+${contact.phone}`;

    try {
        await admin.post('/api/public/website', {
            firstName: contact.firstName,
            lastName: contact.lastName,
            phone: contact.phone,
            email: contact.email,
            source: "Website Contact Form",
            tags: ['contact'],
            locationId: "KZiVLGj4ZfUh3oKvebul",
            customFields: Object.entries(contact.customFields).map(([key, value]) => ({ key, field_value: value }))
        })

        return NextResponse.json({ message: 'Success' }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Error' }, { status: 500 })
    }


}