import { IMailService, IMessage } from "./IMailService";
import * as nodemailer from 'nodemailer';

export class TrapMailService implements IMailService {
    private transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "2ff7ca8912a658",
                pass: "523225212eb703"
            }
        });
    }

    async sendMail(message: IMessage): Promise<void> {

        let mailMessage = {
            to: message.to,
            from: "eduardobrumassio@hotmail.com",
            subject: message.subject,
            text: message.body
        }

        await this.transporter.sendMail(mailMessage, (err) => {
            if (err) {
                return console.log(err);
            }
            return console.log('Sucess');
        });
    }
}