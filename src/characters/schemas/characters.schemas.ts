import { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type CharacterDocument = HydratedDocument<Character>

@Schema()
export class Character{
    @Prop()
    name:string;

    @Prop()
    avatar:string;

    @Prop()
    description:string;

    @Prop()
    image:string;
    
}

export const CharacterSchema = SchemaFactory.createForClass(Character)