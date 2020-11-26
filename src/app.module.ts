import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { HeroesModule } from './heroes/heroes.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/test'), CatsModule, HeroesModule],
})
export class AppModule {}
