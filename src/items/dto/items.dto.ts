import { Type } from "class-transformer";
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";

export enum ItemType {
    Normal = 'Normal',
    Excellent = 'Excellent',
}

export class ImageDto {
    @IsString()
    @IsNotEmpty()
    url: string;

    @IsNumber()
    @IsNotEmpty()
    level: number;
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
    
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => ImageDto)
    image: ImageDto[];

    @IsNumber()
    @IsNotEmpty()
    defense:number;

    @IsNumber()
    @IsNotEmpty()
    durability:number;

    @IsNumber()
    @IsOptional()
    attackSpeed:number

    @IsString()
    @IsNotEmpty()
    class:string

    @IsString()
    set:string;

    @IsNumber()
    @IsNotEmpty()
    upgradeStr:number;

    @IsNumber()
    @IsNotEmpty()
    upgradeAgi:number;

    @IsNumber()
    @IsNotEmpty()
    upgradeDefense:number;


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

    @IsOptional()
    @ValidateNested()
    @Type(() => ImageDto)
    image: ImageDto[];

    @IsNumber()
    @IsOptional()
    defense:number;

    @IsNumber()
    @IsOptional()
    durability:number;

    @IsNumber()
    @IsOptional()
    attackSpeed:number

    @IsString()
    @IsOptional()
    class:string

    @IsString()
    @IsOptional()
    set:string;

    @IsNumber()
    @IsOptional()
    upgradeStr:number;

    @IsNumber()
    @IsOptional()
    upgradeAgi:number;

    @IsNumber()
    @IsOptional()
    upgradeDefense:number;
}