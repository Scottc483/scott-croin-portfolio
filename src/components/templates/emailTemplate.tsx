import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, email, message,
}) => (
  <div>
    <h1>Contact Form Submission</h1>
    <p>Name: {firstName}</p>
    <p>Email: {email}</p>
    <p>Message: {message}</p>
  </div>
);