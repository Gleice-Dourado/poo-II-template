import { User } from "../models/User";
import { TUserDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    //metodo estático
    async findUsers(q: string) {
        if (q) {
            const result: TUserDB[] = await BaseDatabase.connection("users").where("name", "LIKE", `%${q}%`)
            return result
        } else {
            const result: TUserDB[] = await BaseDatabase.connection("users")
            return result
        }
    }

    async findUserById(id: string): Promise<TUserDB | undefined>{
        const [result] = await BaseDatabase.connection('users').where({id})
        return result
    }

    async insertUser (user: User): Promise<void> {
        await BaseDatabase.connection("users").insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            created_at: user.getCreatedAt()
        })
    }
}

