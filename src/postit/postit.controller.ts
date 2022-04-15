/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostIt } from './postit';
import { PostItService } from './postit.service';

@Controller('postits')
export class PostItController {
  constructor(private readonly postItService: PostItService) {}

  @Get()
  async getAllPostIt(): Promise<PostIt[]> {
    return this.postItService.getAllPostIt();
  }

  @Get(':id')
  async getPostItById(@Param('id') id: string): Promise<PostIt> {
    return this.postItService.getPostItById(id);
  }

  @Post()
  async createPostIt(@Body() postIt: PostIt): Promise<PostIt> {
    return this.postItService.createPostIt(postIt);
  }

  @Put(':id')
  async updatePostIt(
    @Param('id') id: string,
    @Body() postIt: PostIt
  ): Promise<PostIt> {
    return this.postItService.updatePostIt(id, postIt);
  }

  @Delete(':id')
  async deletePostIt(@Param('id') id: string) {
    this.postItService.deletePostIt(id);
  }
}
