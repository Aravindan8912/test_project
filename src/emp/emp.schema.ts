import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmpDocument = Emp & Document;

@Schema()
export class Emp {
  @Prop({ required: true })
  empname: string;

  @Prop({ required: true })
  phonenumber: number;

  @Prop({ required: true })
  address: string;
}

export const EmpSchema = SchemaFactory.createForClass(Emp);
