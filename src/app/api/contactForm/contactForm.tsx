// // import type { NextApiRequest, NextApiResponse } from 'next';
// // import { EmailTemplate } from '../../../components/templates/emailTemplate';
// // import { Resend } from 'resend';

// // const resend = new Resend(process.env.RESEND_API_KEY);

// // async function handler(req: NextApiRequest, res: NextApiResponse) {
// //   try {
// //     const { data, error } = await resend.emails.send({
// //       from: 'onboarding@resend.dev',
// //       to: ['scottcroin.dev@gmail.com'],
// //       subject: 'Contact Form Submission',
// //       react: EmailTemplate({ firstName: req.body.fullname }),
// //       text: `Message from: ${req.body.email}\n\n${req.body.message}`,
// //     });

// //     if (error) {
// //       console.error('Resend error:', error);
// //       return res.status(400).json({ error });
// //     }

// //     return res.status(200).json(data);
// //   } catch (e) {
// //     console.error('Server error:', e);
// //     return res.status(500).json({ error: 'Internal server error' });
// //   }
// // }

// // export default handler;

// import type { NextApiRequest, NextApiResponse } from 'next';
// import { EmailTemplate } from '../../../components/templates/emailTemplate';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
// console.log(process.env.RESEND_API_KEY);


// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//     console.log(req.body);
//   const { data, error } = await resend.emails.send({
//     from: 'Acme <onboarding@resend.dev>',
//     to: ['delivered@resend.dev'],
//     subject: 'Hello world',
//     react: EmailTemplate({ firstName: 'John' }),
//   });

//   if (error) {
//     return res.status(400).json(error);
//   }

//   res.status(200).json(data);
// };

// export default handler;