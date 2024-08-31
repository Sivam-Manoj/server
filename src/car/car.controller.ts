import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { CarService } from './car.service';
import { CreateCarDto } from './car.dto';

@Controller('car')
export class CarController {
  constructor(private carService: CarService) {}

  @Post()
  async addCar(@Body() createCarDto: CreateCarDto) {
    return this.carService.addCar(createCarDto);
  }

  @Get()
  async getCars() {
    return this.carService.getCars();
  }

  @Put(':id')
  async updateCar(@Param('id') id: number, @Body() updateDto: CreateCarDto) {
    console.log(id);
    return this.carService.updateCarById(id, updateDto);
  }

  @Delete(':id')
  async deleteCar(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<void> {
    try {
      await this.carService.deleteCarById(id);
      res
        .status(HttpStatus.OK)
        .json({ message: `Car with ID ${id} successfully deleted` });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Failed to delete car' });
    }
  }
}
