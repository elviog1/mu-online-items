import { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ItemDocument = HydratedDocument<Item>

@Schema()
export class Item{
    @Prop()
    name:string;
    
    @Prop()
    level:number;
    
    @Prop()
    str:number;
    
    @Prop()
    agi:number;
    
    @Prop()
    type:string;

    @Prop()
    image:string;

    @Prop()
    set:string;

    @Prop()
    upgradeStr:number;

    @Prop()
    upgradeAgi:number;

    
}

export const ItemSchema = SchemaFactory.createForClass(Item)