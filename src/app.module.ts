import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostItModule } from './postit/postit.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/?directConnection=true&serverSelectionTimeoutMS=30&appName=mongosh+1.3.1`
    ),
    PostItModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
