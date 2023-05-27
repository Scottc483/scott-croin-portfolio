import { NextResponse, NextRequest } from "next/server";
import sgMail from "@sendgrid/mail";

export async function GET(){
    return NextResponse.json({message: 'nothing here'})
}

export async function POST(req: Request){
    try {

        const { fullname, email, message } = await req.json();

        const apiKey = process.env.SENDGRID_API_KEY as string;
        sgMail.setApiKey(apiKey);
        const msg = {
            to: 'scottcroin.dev@gmail.com',
            from: 'scott.c19@gmail.com',
            subject: 'Contact Form Submission',
            html: `<p>Name: ${fullname}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
        };
        await sgMail.send(msg);
        return NextResponse.json({message: 'success'})
    }
    catch (err){
        console.log(err);
        return NextResponse.json({message: 'error'})
    }
}

