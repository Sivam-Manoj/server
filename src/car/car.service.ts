import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './entity/CarEntity';
import { Repository } from 'typeorm';
import { CreateCarDto } from './car.dto';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
  ) {}

  async addCar(createCarDto: CreateCarDto): Promise<Car> {
    const newCar = this.carRepository.create(createCarDto);
    return this.carRepository.save(newCar);
  }

  async getCars(): Promise<Car[]> {
    return this.carRepository.find();
  }

  async updateCarById(id: number, updateCarDto: CreateCarDto): Promise<Car> {
    const car = await this.carRepository.findOneBy({ id });
    if (!car) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }
    this.carRepository.merge(car, updateCarDto);
    return this.carRepository.save(car);
  }

  async deleteCarById(id: number): Promise<void> {
    const result = await this.carRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }
  }
}
