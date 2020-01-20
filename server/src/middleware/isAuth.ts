import { MiddlewareFn } from "type-graphql";
import { ApolloError } from "apollo-server-core";
import { MyContext } from "../graphql-types/MyContext";

export const isAuth: MiddlewareFn<MyContext> = async ({ context }, next) => {
  if (!context.req.session!.userId) {
    throw new ApolloError("not authenticated");
  }
  console.log(context.req.session!.userId);
  console.log(context.req.session!);

  

  return next();
};
