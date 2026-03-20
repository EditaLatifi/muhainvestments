import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { serviceType, name, phone, pickup, destination, date, details } = await req.json();

    if (!name || !phone || !serviceType) {
      return NextResponse.json({ error: "Name, phone and service type are required." }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Muha Investments Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      subject: `New Quote Request — ${serviceType} (${name})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #050a30; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #ffffff; margin: 0;">New Quote Request</h2>
            <p style="color: #93a8ff; margin: 4px 0 0;">Muha Investments — Services Page</p>
          </div>
          <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            <div style="background: #233dff; color: #ffffff; display: inline-block; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 600; margin-bottom: 20px;">
              ${serviceType}
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px; width: 140px;">Name</td>
                <td style="padding: 10px 0; color: #111827; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Phone</td>
                <td style="padding: 10px 0; color: #111827;">${phone}</td>
              </tr>
              ${pickup ? `<tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Pickup</td>
                <td style="padding: 10px 0; color: #111827;">${pickup}</td>
              </tr>` : ""}
              ${destination ? `<tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Destination</td>
                <td style="padding: 10px 0; color: #111827;">${destination}</td>
              </tr>` : ""}
              ${date ? `<tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Preferred Date</td>
                <td style="padding: 10px 0; color: #111827;">${date}</td>
              </tr>` : ""}
            </table>
            ${details ? `
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
            <p style="color: #6b7280; font-size: 13px; margin-bottom: 8px;">Additional Details</p>
            <p style="color: #111827; white-space: pre-wrap; background: #ffffff; padding: 16px; border-radius: 6px; border: 1px solid #e5e7eb;">${details}</p>
            ` : ""}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quote mail error:", err);
    return NextResponse.json({ error: "Failed to send request. Please try again." }, { status: 500 });
  }
}
