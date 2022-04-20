import { UserRepository } from "../../data/repositories/UserRepository";
import { TrapMailService } from "../../services/TrapMailService";
import { CreateUser } from "./CreateUser";
import { CreateUserController } from "./CreateUserController";

const userRepository = new UserRepository();
const trapMailService = new TrapMailService();

const createUser = new CreateUser(
    userRepository,
    trapMailService
);

const createUserController = new CreateUserController(
    createUser
);

export { createUser, createUserController };