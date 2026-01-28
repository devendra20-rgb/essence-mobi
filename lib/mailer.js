import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true only for 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendMail({ subject, html, replyTo }) {
  return transporter.sendMail({
    from: `"Essence Mobi" <${process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO,
    subject,
    html,
    replyTo,
  });
}
