import argon2 from "argon2";
import { User } from "../models/user";
import { Arg, Mutation, Resolver } from "type-graphql";
import { UserMutationResponse } from "../types/userMutationResponse";
import { RegisterInput } from "../types/registerInput";

@Resolver()
export class UserResolver {
  @Mutation((_returns) => UserMutationResponse, { nullable: true })
  async register(
    @Arg("registerInput") { username, email, password }: RegisterInput
  ): Promise<UserMutationResponse> {
    try {
      const existingUsers = await User.find({
        where: [{ username }, { email }],
      });
      if (existingUsers.length !== 0)
        return {
          code: 400,
          success: false,
          message: "Duplicated username or email!",
          errors: [
            {
              field:
                existingUsers[0].username === username ? "username" : "email",
              message: `${
                existingUsers[0].username === username ? "Username" : "Email"
              } already taken`,
            },
          ],
        };

      const hashedPassword = await argon2.hash(password);
      const newUser = User.create({
        username,
        password: hashedPassword,
        email,
      });

      // save new user to database
      return {
        code: 200,
        success: true,
        message: "User registration successful",
        user: await User.save(newUser),
      };
    } catch (error) {
      console.log(error);
      return {
        code: 400,
        success: false,
        message: "Internal server error!",
      };
    }
  }
}
