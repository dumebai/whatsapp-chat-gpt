const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

exports.sendVerificationEmail = async (to, token) => {
  const url = `${process.env.FRONTEND_URL}/verify?token=${token}`;
  const info = await transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject: 'Verify your account',
    html: `<p>Click <a href="${url}">here</a> to verify your email.</p>`
  });
  console.log('Verification email sent', info.messageId);
};
