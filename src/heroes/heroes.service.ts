import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Hero } from './schemas/hero.schema';
import { CreateHeroDto } from './dto/create-hero.dto';

@Injectable()
export class HeroesService {
    constructor(@InjectModel(Hero.name) private readonly heroModel: Model<Hero>) {}

  async create(createHeroDto: CreateHeroDto): Promise<Hero> {
    const createdHero = new this.heroModel(createHeroDto);
    return createdHero.save();
  }

  async findAll(): Promise<Hero[]> {
    return this.heroModel.find().exec();
  }
}
