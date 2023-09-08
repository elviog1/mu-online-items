import { Injectable } from '@nestjs/common';
import { Character } from './schemas/characters.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCharacterDto, UpdateCharacterDto } from './dto/characters.dto';

@Injectable()
export class CharactersService {
    constructor(@InjectModel(Character.name) private characterModel: Model<Character>){}

    async createCharacter(character: CreateCharacterDto) : Promise<Character>{
        const createCharacter = new this.characterModel(character)
        return createCharacter.save()
       }

       async findAll() : Promise<Character[]>{
        return this.characterModel.find().exec()
       }

       async updateCharacter(id:string, updateCharacterDto: UpdateCharacterDto): Promise <Character>{
        const characterUpdate = await this.characterModel.findByIdAndUpdate({_id:id}, updateCharacterDto,{new:true})
        return characterUpdate
   }
}
