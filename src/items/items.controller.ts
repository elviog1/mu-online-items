import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto, UpdateItemDto } from './dto/items.dto';

@Controller('items')
export class ItemsController {
    constructor(private itemsService: ItemsService){}

    @Post()
    createItem(@Body() body : CreateItemDto){
        return this.itemsService.createItem(body)
    }

    @Get()
    findAll(){
        return this.itemsService.findAll()
    }

    @Get(':id')
    findItemById(@Param('id') id: string) {
        return this.itemsService.findItemById(id)
    }

    @Delete(':id')
    @HttpCode(204)
    deleteItem(@Param('id') id:string){
        return this.itemsService.deleteItem(id)
        }

    @Put(':id')
    updateItem(@Param('id') id:string, @Body() body:UpdateItemDto){
        return this.itemsService.updateItem(id,body)
    }
    
}
