import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // port 465 = SSL
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !message) {
      return NextResponse.json({ error: "Name and message are required." }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Muha Investments Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email || process.env.SMTP_USER,
      subject: subject ? `Contact: ${subject}` : `New Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #050a30; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #ffffff; margin: 0;">New Contact Message</h2>
            <p style="color: #93a8ff; margin: 4px 0 0;">Muha Investments Website</p>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px; width: 120px;">Name</td>
                <td style="padding: 10px 0; color: #111827; font-weight: 600;">${name}</td>
              </tr>
              ${email ? `<tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; color: #111827;">${email}</td>
              </tr>` : ""}
              ${phone ? `<tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Phone</td>
                <td style="padding: 10px 0; color: #111827;">${phone}</td>
              </tr>` : ""}
              ${subject ? `<tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Subject</td>
                <td style="padding: 10px 0; color: #111827;">${subject}</td>
              </tr>` : ""}
            </table>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
            <p style="color: #6b7280; font-size: 13px; margin-bottom: 8px;">Message</p>
            <p style="color: #111827; white-space: pre-wrap; background: #ffffff; padding: 16px; border-radius: 6px; border: 1px solid #e5e7eb;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact mail error:", err);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
