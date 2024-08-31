import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { Car } from './entity/CarEntity';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  providers: [CarService],
  controllers: [CarController],
})
export class CarModule {}
