import { createTransport } from "nodemailer";
import 'dotenv/config';
import { templateHtml } from "./templateHtml.js";

export const transporter = createTransport ({
    host: process.env.HOST_ETHEREAL,
    port: process.env.PORT_ETHEREAL,
    auth: {
        user: process.env.EMAIL_ETHEREAL,
        pass: process.env.PASSWORD_ETHEREAL
    }
})

/* plantilla de email STRIPO stripo.email */

export const mailOptions = {
    from: process.env.EMAIL_ETHEREAL,
    to: process.env.EMAIL_ETHEREAL,
    subject: 'Hola',
    html: templateHtml,
    text: 'Hello, ',
    attachments: [
       /*  {
            path: process.cwd() + '/',
            filename: ` Adjunto a ${process.emv.EMAIL_ETHEREAL} `
        } */
    ]
}