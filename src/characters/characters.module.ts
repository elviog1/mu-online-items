import { Module } from '@nestjs/common';
import { CharactersController } from './characters.controller';
import { CharactersService } from './characters.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Character, CharacterSchema } from './schemas/characters.schemas';

@Module({
  imports:[MongooseModule.forFeature([{name:Character.name,schema:CharacterSchema}])],
  controllers: [CharactersController],
  providers: [CharactersService]
})
export class CharactersModule {}
