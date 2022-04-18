import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostItModule } from './postit/postit.module';

const DB_USER = 'user';
const PASSWORD = encodeURIComponent('hello@123');
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://userpostit:userpostit123@10.103.190.209:27017/?directConnection=true&serverSelectionTimeoutMS=30&appName=mongosh+1.3.1'
    ),
    PostItModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
