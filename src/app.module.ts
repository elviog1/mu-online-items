import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CharactersModule } from './characters/characters.module';

@Module({
  imports: [ItemsModule, MongooseModule.forRoot('mongodb+srv://mu-online-items:mu-online-items@mu-online-items.vlsw0a3.mongodb.net/?retryWrites=true&w=majority'), CharactersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
