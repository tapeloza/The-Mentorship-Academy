const maxLength = 5000;

function clean(value, limit = maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, limit) : '';
}

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(request, response) {
  response.setHeader('Allow', 'POST');

  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method not allowed.' });
  }

  const body = request.body || {};
  const name = clean(body.name, 120);
  const email = clean(body.email, 254);
  const interest = clean(body.interest, 160);
  const message = clean(body.message);
  const website = clean(body.website, 200);

  if (website) {
    return response.status(200).json({ message: 'Thank you for getting in touch.' });
  }

  if (name.length < 2 || !validEmail(email) || message.length < 10) {
    return response.status(400).json({ message: 'Please enter your name, a valid email address and a short message.' });
  }

  const { RESEND_API_KEY, CONTACT_FROM, CONTACT_RECIPIENT } = process.env;
  if (!RESEND_API_KEY || !CONTACT_FROM || !CONTACT_RECIPIENT) {
    console.error('Contact form environment variables are not configured.');
    return response.status(503).json({ message: 'The contact form is being set up. Please email hello@mentorshipacademy.co.za instead.' });
  }

  try {
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: [CONTACT_RECIPIENT],
        reply_to: email,
        subject: `New Academy enquiry from ${name.replace(/[\r\n]/g, ' ')}`,
        text: `Name: ${name}\nEmail: ${email}\nInterest: ${interest || 'Not specified'}\n\nMessage:\n${message}`,
      }),
    });

    if (!emailResponse.ok) {
      console.error('Email provider rejected contact form submission:', await emailResponse.text());
      return response.status(502).json({ message: 'We could not send your message just now. Please try again or email us directly.' });
    }

    return response.status(200).json({ message: 'Thank you for getting in touch.' });
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return response.status(502).json({ message: 'We could not send your message just now. Please try again or email us directly.' });
  }
}
