import { Resend } from 'resend';

interface ApiRequest {
  method?: string;
  body?: {
    name?: string;
    email?: string;
    message?: string;
  };
}

interface ApiResponse {
  status: (code: number) => ApiResponse;
  json: (data: Record<string, unknown>) => void;
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide all required fields: name, email, and message.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'RESEND_API_KEY is not configured. Please set the RESEND_API_KEY environment variable.'
    });
  }

  const resend = new Resend(apiKey);
  const targetEmail = process.env.RESEND_TO_EMAIL || 'vivek.pandit1499@gmail.com';
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [targetEmail],
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #0d0d0d; color: #f9fafb;">
          <div style="border-bottom: 2px solid #f59e0b; padding-bottom: 12px; margin-bottom: 20px;">
            <span style="font-family: monospace; font-size: 11px; letter-spacing: 2px; color: #f59e0b; text-transform: uppercase;">
              CHAPTER 06 // CONNECT
            </span>
            <h2 style="color: #fef3c7; margin: 6px 0 0 0; font-size: 22px;">
              🎬 New Portfolio Message
            </h2>
          </div>

          <p style="font-size: 14px; color: #9ca3af; line-height: 1.6; margin-bottom: 20px;">
            You have received a new contact proposition from your portfolio website:
          </p>

          <div style="background-color: #171717; padding: 18px; border-radius: 8px; border: 1px solid #262626; margin-bottom: 20px;">
            <div style="margin-bottom: 12px;">
              <span style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #f59e0b; letter-spacing: 1px; display: block; margin-bottom: 2px;">
                From
              </span>
              <strong style="font-size: 15px; color: #fef3c7;">${name}</strong>
              <span style="font-size: 13px; color: #9ca3af; margin-left: 6px;">(&lt;${email}&gt;)</span>
            </div>

            <div>
              <span style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #f59e0b; letter-spacing: 1px; display: block; margin-bottom: 6px;">
                Message Script
              </span>
              <div style="background-color: #0a0a0a; border: 1px solid #262626; border-radius: 6px; padding: 14px; font-size: 14px; line-height: 1.6; color: #e5e7eb; white-space: pre-wrap;">${message}</div>
            </div>
          </div>

          <p style="font-size: 12px; color: #6b7280; text-align: center; margin: 0; font-family: monospace;">
            Direct reply will go to <a href="mailto:${email}" style="color: #f59e0b; text-decoration: none;">${email}</a>
          </p>
        </div>
      `,
      text: `New Portfolio Message from ${name} (${email}):\n\n${message}`
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || 'Internal Server Error while sending email via Resend.' });
  }
}
