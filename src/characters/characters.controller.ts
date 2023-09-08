import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CreateCharacterDto, UpdateCharacterDto } from './dto/characters.dto';

@Controller('characters')
export class CharactersController {
    constructor(private characterService: CharactersService){}

    @Post()
    createCharacter(@Body() body : CreateCharacterDto){
        return this.characterService.createCharacter(body)
    }

    @Get()
    findAll(){
        return this.characterService.findAll()
    }

    @Put(':id')
    updateCharacter(@Param('id') id:string, @Body() body:UpdateCharacterDto){
        return this.characterService.updateCharacter(id,body)
    }
}
