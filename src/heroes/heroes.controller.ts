import { Body, Controller, Get, Post } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { Hero } from './schemas/hero.schema';

@Controller('heroes')
export class HeroesController {

  constructor(private readonly heroesService: HeroesService) {}

  @Post()
  async create(@Body() createHeroDto: CreateHeroDto) {
    await this.heroesService.create(createHeroDto);
  }

  @Get()
  async findAll(): Promise<Hero[]> {
    return this.heroesService.findAll();
  }
}
