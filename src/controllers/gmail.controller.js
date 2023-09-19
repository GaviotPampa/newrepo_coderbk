import { transporter } from "../services/gmail.service.js";

export const sendGmail = async (req, res) => {
  try {
    const { dest, name } = req.body;
    const gmailOptions = {
      from: process.env.EMMAIL_GMAIL,
      to: dest,
      subject: "🤩Your first message whit NM!",
      html: `<h1>Hi ${name}, welcome </h1>
             <p> ¡Esto es un test🐱‍🚀, un correo de prueba de implementación de mailing!</p>`,
      attachments: [],
    };
    const response = await transporter.sendMail(gmailOptions);
    console.log("Sent mail");
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};
