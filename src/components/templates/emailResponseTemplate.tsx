import * as React from 'react';

interface EmailResponseTemplateProps {
  firstName: string;
}

export const EmailResponseTemplate: React.FC<Readonly<EmailResponseTemplateProps>> = ({
  firstName,
}) => (
  <div style={{
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    color: '#333333',
  }}>
    <h1 style={{ 
      color: '#2d2d2d',
      borderBottom: '2px solid #eaeaea',
      paddingBottom: '10px'
    }}>
      Thank you for reaching out, {firstName}!
    </h1>
    
    <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
      I appreciate you taking the time to contact me. I have received your message and will review it shortly. 
      You can expect to hear back from me within 1-2 business days.
    </p>

    <p style={{ 
      marginTop: '20px',
      fontSize: '14px',
      color: '#666666'
    }}>
      Best regards,<br />
      Scott Croin<br />
      Full Stack Web Developer
    </p>
  </div>
);