import { CreateUser } from "./CreateUser";
import { Request, Response } from 'express';

export class CreateUserController {
    constructor(private createUser: CreateUser) {

    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        try {
            await this.createUser.execute({
                name,
                email,
                password
            })

            return response.status(201).json({
                status: '200',
                data: request.body
            });
        }

        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            })
        }
    }
}