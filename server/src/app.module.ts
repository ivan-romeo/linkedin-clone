import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostgresProviderModule } from './providers/database/postgres/provider.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PostgresProviderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
