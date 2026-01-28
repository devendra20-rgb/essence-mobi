import { NextResponse } from "next/server";
import { sendMail } from "../../../lib/mailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const {
      type, // advertiser | publisher
      name,
      email,
      phone,
      company,
      message1,
      message2,
    } = data;

    const subject =
      type === "advertiser"
        ? "New Advertiser Inquiry"
        : "New Publisher Application";

    const html = `
      <h2>${subject}</h2>
      <p><strong>Type:</strong> ${type}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Details 1:</strong> ${message1}</p>
      <p><strong>Details 2:</strong> ${message2}</p>
    `;

    await sendMail({
      subject,
      html,
      replyTo: email, // direct reply user ko jaaye
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("MAIL ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Mail failed" },
      { status: 500 }
    );
  }
}
