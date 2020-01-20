import {
  Resolver,
  Mutation,
  Arg,
  Query,
  InputType,
  Field,
  UseMiddleware
} from "type-graphql";
import { Journal } from "../entity/Journal";
import { isAuth } from "../middleware/isAuth";
//import { User } from "../entity/User";
//import { AuthResolver } from "./AuthResolver"

@InputType()
class JournalInput {
  @Field()
  title: string;

  @Field()
  body: string;

}

@InputType()
class JournalUpdateInput {
  @Field(() => String, { nullable: true })
  title: string;

  @Field(() => String, { nullable: true })
  body: string;
}

@Resolver()
export class JournalResolver {
  @Mutation(() => Journal)
  async createJournal(
     @Arg("options", () => JournalInput) options: JournalInput
  ) {
    const journal_entry = await Journal.create(options).save();
    return journal_entry;
  }

  @Mutation(() => Boolean)
  async updateJournal(
    @Arg("id", () => String) id: string,
    @Arg("input", () => JournalUpdateInput) input: JournalUpdateInput
  ) {
    //const journal_update_entry = await (await Journal.update({id}, input))
    await await Journal.update({ id }, input);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteJournal(@Arg("id", () => String) id: string) {
    await Journal.delete({ id });
    return true;
  }

  @Query(() => [Journal])
  @UseMiddleware(isAuth)
  journals() {
    return Journal.find();
  }

  @Query(() => Journal)
  journal(@Arg("id", () => String) id: string) {
    return Journal.findOne(id);
  }
}

/*
CREATE-JOURNAL
mutation{
  createJournal(
    options: {
      title:"TypeOrm Again",
      body: "unlike all other JavaScript ORMs that currently exist, which means you can write loosely coupled, scalable, maintainable applications with fewer problems."
    }
  ) {
    id
    title
    body
    createdOn
    
  }
}

GET A JOURNAL
query{
  journal(id: "a6a0ba84-4276-4bf0-8b73-77b56fa74f0d") {
    id
    title
  }
}


GET ALL JOURNALS
query {
  journals {
    id
    title
    body
    createdOn
   }
}


UPDATE A JOURNAL
mutation {
  updateJournal(id: "8f5d7345-561d-4373-baa0-c1df15144d4e"
    input: {
      title: "A new Dawn"
    })
}
----------
mutation {
  updateJournal(id: "b71782ed-9def-4131-acd4-317eb6155a9c"
    input: {
      body: "Mrs jegede wear np P@nt"
    })
}


DELET JOURNAL
mutation {
  deleteJournal(id: "ff6e67a3-19a8-4966-8c8f-7d045dee5d9b")
}


*/
