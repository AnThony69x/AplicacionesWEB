import { Controller, Get, Post, Body, Patch, Param, Delete, Injectable, Inject } from '@nestjs/common';
import { UsersService } from './users.service';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientProxy } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  constructor(
    @Inject("MATH_SERVICE")
    private cliente: ClientProxy) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
  }

  @Get()
  findAll() {
    this.cliente.send("users.findAll", {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
  }
}
