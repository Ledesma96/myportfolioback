import { MailerServices } from "../services/mailer.services.js";


export const sendaMail = async(req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const mailerServices = new MailerServices();
    const result = await mailerServices.sendMail(name, email, message);

    return res.status(200).json(result);
}
