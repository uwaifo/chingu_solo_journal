import {  Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,  BaseEntity } from "typeorm"
import {User} from "./User"
import { Field, ObjectType } from "type-graphql"


@ObjectType()
@Entity("journal")
export class Journal extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Field()
    @Column("text", { unique: true })
    title: string


    @Field()
    @Column()
    body: string

     
    @Field(() => User)
    //@ManyToOne(type => User, user => user.journals)
    user: User;
    

    @Field()
    @CreateDateColumn()
    createdOn: string
}