import { SMTPClient } from 'emailjs';


export default async function handler(req, res) {
    const {messageBody, detailsBody} = req.body
    
    const client = new SMTPClient({
        user: process.env.EMAIL,
        password: process.env.PASSWORD,
        host: 'smtp.gmail.com',
        ssl: true,
    });

    try {
        const message = await client.sendAsync({
            text: messageBody,
            from: process.env.EMAIL,
            to: 'edson.mendes.palhares@gmail.com',
            subject: `Lead - nome: ${detailsBody.name}`,
        });
        console.log(message);
    } catch (err) {
        console.error(err);
    }

    res.status(200).json({ message: 'Send Email' })
  }
  