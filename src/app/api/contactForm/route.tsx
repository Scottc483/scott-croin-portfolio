import { NextResponse } from "next/server";
import { EmailTemplate } from '../../../components/templates/emailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log('Request body:', body);

        const { data, error } = await resend.emails.send({
            from: 'Scott Croin <response@scottcroin.com>',
            to: ['scottcroin.dev@gmail.com'],
            subject: 'Contact Form Submission',
            react: EmailTemplate({ firstName: body.fullname, email: body.email, message: body.message }),
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json({ data });
    } catch (e) {
        console.error('Server error:', e);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}



