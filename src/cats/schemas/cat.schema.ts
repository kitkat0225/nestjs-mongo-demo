import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Cat extends Document {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);

//---------------------------------------------------------
// export const CatSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     breed: String,
// });
//---------------------------------------------------------