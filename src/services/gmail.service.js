import { createTransport } from "nodemailer";

export const transporter = createTransport ({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_GMAIL,
        pass: process.env.PASSWORD_NODEMAILER
    }
})