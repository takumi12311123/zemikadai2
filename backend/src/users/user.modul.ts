import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersResolver } from './user.resulver';
import { UsersService } from './user.service';

@Module({
    providers: [UsersService, UsersResolver],
    exports: [UsersService],
    imports: [PrismaModule],
})
export class UsersModule { }