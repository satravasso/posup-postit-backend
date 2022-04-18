import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostItModule } from './postit/postit.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=30&appName=mongosh+1.3.1'
    ),
    PostItModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
