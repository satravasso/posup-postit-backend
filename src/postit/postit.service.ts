/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PostIt } from './postit';
import { Model } from 'mongoose';

@Injectable()
export class PostItService {
  constructor(
    @InjectModel('PostIt') private readonly postItModel: Model<PostIt>
  ) {}

  async getPostItById(id: string) {
    return await this.postItModel.findById(id).exec();
  }

  async getAllPostIt() {
    return await this.postItModel.find().exec();
  }

  async createPostIt(postIt: PostIt) {
    const createPostIt = new this.postItModel(postIt);
    return await createPostIt.save();
  }

  async updatePostIt(id: string, postIt: PostIt) {
    await this.postItModel.updateOne({ _id: id }, postIt).exec();
    return this.getPostItById(id);
  }
  async deletePostIt(id: string) {
    return await this.postItModel.deleteOne({ _id: id }).exec();
  }
}
