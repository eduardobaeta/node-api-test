export interface IMessage {
    body: string;
    subject: string;
    to: string;
    from?: string;
}

export interface IMailService {
    sendMail(message: IMessage): Promise<void>;
}

