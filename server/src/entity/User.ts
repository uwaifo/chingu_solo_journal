import { CreateDateColumn, Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import {Journal} from "./Journal"
@ObjectType()
@Entity("user")
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field() 
  @Column("text", { unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(type => Journal, journal => journal.user)
  journals: Journal[];

  @Field()
  @CreateDateColumn()
  createdOn: string

}
