import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCharacterDto{
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @IsString()
    avatar: string;
    
    @IsNotEmpty()
    @IsString()
    description: string;
    
    @IsNotEmpty()
    @IsString()
    image: string;
    
}

export class UpdateCharacterDto{
    @IsString()
    @IsOptional()
    name:string;
    
    @IsString()
    @IsOptional()
    avatar:string;
    
    @IsString()
    @IsOptional()
    description:string;
    
    @IsString()
    @IsOptional()
    image:string;
    
}