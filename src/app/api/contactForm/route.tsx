// import { NextResponse, NextRequest } from "next/server";
// import sgMail from "@sendgrid/mail";

// export async function GET(){
//     return NextResponse.json({message: 'nothing here'})
// }

// export async function POST(req: Request){
//     try {

//         const { fullname, email, message } = await req.json();

//         const apiKey = process.env.SENDGRID_API_KEY as string;
//         sgMail.setApiKey(apiKey);
//         const msg = {
//             to: 'scottcroin.dev@gmail.com',
//             from: 'scott.c19@gmail.com',
//             subject: 'Contact Form Submission',
//             html: `<p>Name: ${fullname}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
//         };
//         await sgMail.send(msg);
//         return NextResponse.json({message: 'success'})
//     }
//     catch (err){
//         console.log(err);
//         return NextResponse.json({message: 'error'})
//     }
// }

import { NextResponse } from "next/server";
import { EmailTemplate } from '../../../components/templates/emailTemplate';
import { Resend } from 'resend';
import { EmailResponseTemplate } from '../../../components/templates/emailResponseTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log('Request body:', body);

        // Send notification email to you
        const notificationEmail = await resend.emails.send({
            from: 'Scott Croin <response@scottcroin.com>',
            to: ['scottcroin.dev@gmail.com'],
            subject: 'New Contact Form Submission',
            react: EmailTemplate({ firstName: body.fullname, email: body.email, message: body.message }),
        });

        // Send thank you email to the user
        const thankYouEmail = await resend.emails.send({
            from: 'Scott Croin <response@scottcroin.com>',
            to: [body.email],
            subject: 'Thank you for contacting Scott Croin',
            react: EmailResponseTemplate({ firstName: body.fullname }),
        });

        if (notificationEmail.error || thankYouEmail.error) {
            console.error('Resend error:', notificationEmail.error || thankYouEmail.error);
            return NextResponse.json({ error: 'Failed to send email' }, { status: 400 });
        }

        return NextResponse.json({ success: true });
    } catch (e) {
        console.error('Server error:', e);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}



