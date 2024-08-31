import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './car/entity/CarEntity';

@Module({
  imports: [
    CarModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '2006',
      database: 'cars',
      entities: [Car], // Add your entities here
      synchronize: true, // Automatically synchronize the schema (development only)
    }),
    TypeOrmModule.forFeature([Car]),
  ],
})
export class AppModule {}
