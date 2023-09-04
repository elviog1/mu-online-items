import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './schemas/items.schemas';
import {  Model } from 'mongoose';
import { CreateItemDto, ImageDto, UpdateItemDto } from './dto/items.dto';

@Injectable()
export class ItemsService {

   constructor(@InjectModel(Item.name) private itemModel: Model<Item>){}

   async createItem(item: CreateItemDto) : Promise<Item>{
    const createItem = new this.itemModel(item)
    return createItem.save()
   }

   async findAll() : Promise<Item[]>{
    return this.itemModel.find().exec()
   }

   async findItemById(id:string) : Promise<Item>{
    return this.itemModel.findById(id)
   }

   async deleteItem(id:string) : Promise <Item>{
        return this.itemModel.findByIdAndDelete(id)
   }

   async updateItem(id:string, updateItemDto: UpdateItemDto): Promise <Item>{
        const itemUpdate = await this.itemModel.findByIdAndUpdate({_id:id}, updateItemDto,{new:true})
        return itemUpdate
   }

   async addImageToItem(id:string, imagedto:ImageDto) : Promise <Item>{
     const existingItem = await this.itemModel.findById(id)
     if(!existingItem) return ;
     existingItem.image.push(imagedto)
     return existingItem.save()
   }
}
