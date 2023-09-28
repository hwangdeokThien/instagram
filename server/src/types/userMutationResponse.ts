import { Field, ObjectType } from "type-graphql";
import { IMutationResponse } from "./mutationResponse";
import { User } from "../models/user";
import { FieldError } from "./fieldError";

@ObjectType({ implements: IMutationResponse })
export class UserMutationResponse implements IMutationResponse {
  code: number;
  success: boolean;
  message?: string | undefined;

  @Field({ nullable: true })
  user?: User;

  @Field((_type) => [FieldError], { nullable: true })
  errors?: FieldError[];
}
