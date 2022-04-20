import { IUserRepository } from "../../data/repositories/IUserRepository";
import { User } from "../../domain/entities/user";
import { IMailService } from "../../services/IMailService";
import { ICreateUserRequestDTO } from "./ICreateUserDTO";

export class CreateUser {
    constructor(
        private userRepository: IUserRepository,
        private mailService: IMailService
    ) { }

    async execute(data: ICreateUserRequestDTO) {
        const userAlredyExists = await this.userRepository.findByEmail(data.email);

        if (userAlredyExists) {
            throw new Error('User already exists');
        }

        const user = new User(data.name, data.email, data.password);

        await this.userRepository.createUser(user);

        this.mailService.sendMail({
            to: user.email,
            subject: `Welcome to Snake Game, ${user.name}`,
            body: 'Now you can play our snake game.'
        });
    }
}