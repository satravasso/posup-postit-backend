import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostItModule } from './postit/postit.module';

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
