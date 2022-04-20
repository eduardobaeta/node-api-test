import { uuid } from "uuidv4";
import { BaseEntity } from "../common/baseEntity";

export class User extends BaseEntity {
    public name: string;
    public email: string;
    public passwordHash: string;

    constructor(theName: string, theEmail: string, thePasswordHash: string, id?: string) {
        super();
        this.name = theName;
        this.email = theEmail;
        this.passwordHash = thePasswordHash;

        if (!id) {
            this.id = uuid();
        }
    }
}