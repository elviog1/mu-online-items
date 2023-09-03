import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export enum ItemType {
    Weapon = 'Weapon',
    Armor = 'Armor',
}
export class CreateItemDto{
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNumber()
    level: number;
    
    @IsNotEmpty()
    @IsNumber()
    str: number;
    
    @IsNotEmpty()
    @IsNumber()
    agi:number;

    @IsString()
    @IsNotEmpty()
    @IsEnum(ItemType)
    type: ItemType
    
    @IsString()
    @IsNotEmpty()
    image:string;

    @IsString()
    set:string;

    @IsNumber()
    @IsNotEmpty()
    upgradeStr:number;

    @IsNumber()
    @IsNotEmpty()
    upgradeAgi:number;


}

export class UpdateItemDto{
    @IsString()
    @IsOptional()
    name:string;

    @IsNumber()
    @IsOptional()
    level:number;
    
    @IsNumber()
    @IsOptional()
    str:number;
    
    @IsNumber()
    @IsOptional()
    agi:number;

    @IsString()
    @IsOptional()
    @IsEnum(ItemType)
    type: ItemType

    @IsString()
    @IsOptional()
    image:string;

    @IsString()
    @IsOptional()
    set:string;

    @IsNumber()
    @IsOptional()
    upgradeStr:number;

    @IsNumber()
    @IsOptional()
    upgradeAgi:number;
}