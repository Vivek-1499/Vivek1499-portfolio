import { Resend } from 'resend';

interface Env {
  RESEND_API_KEY: string;
  RESEND_TO_EMAIL?: string;
  RESEND_FROM_EMAIL?: string;
}

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  try {
    const { request, env } = context;
    const body = (await request.json()) as { name?: string; email?: string; message?: string };
    const { name, email, message } = body || {};

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Please provide all required fields: name, email, and message.' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const apiKey = env.RESEND_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          error: 'RESEND_API_KEY is not configured in Cloudflare Pages environment variables.'
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const resend = new Resend(apiKey);
    const targetEmail = env.RESEND_TO_EMAIL || 'vivek.pandit1499@gmail.com';
    const fromEmail = env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

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
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err?.message || 'Internal Server Error while sending email via Cloudflare Pages Function.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
