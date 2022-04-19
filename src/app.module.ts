import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostItModule } from './postit/postit.module';

const DB_USER = 'user';
const PASSWORD = encodeURIComponent('hello@123');
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://userposup:userposup@posup-mongodb.zvffb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    ),
    PostItModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
