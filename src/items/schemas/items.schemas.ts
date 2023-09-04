import { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ItemDocument = HydratedDocument<Item>

@Schema()
export class Item{
    @Prop()
    name:string;
    
    @Prop()
    set:string;

    @Prop()
    type:string;

    @Prop()
    image: { url: string; level: number }[];

    @Prop()
    defense:number

    @Prop()
    durability: number

    @Prop()
    attackSpeed: number

    @Prop()
    class: string[];

    @Prop()
    level:number;
    
    @Prop()
    str:number;
    
    @Prop()
    agi:number;
    
    @Prop()
    upgradeStr:number;

    @Prop()
    upgradeAgi:number;

    @Prop()
    upgradeDefense: number;
    
}

export const ItemSchema = SchemaFactory.createForClass(Item)