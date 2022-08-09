import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
  import { UserService } from './user.service';
  
  @Controller('user')
  export class UserController {
    constructor(private userService: UserService) {}
  
    @Get()
    getAllUser() {
      return this.userService.getUser();
    }
  
    @Get(':id')
    getSpecificUser(@Param()index: any) {
      return this.userService.getSpecificUser(index.id);
    }
  
    @Post()
    createUser(@Body() user) {
      return this.userService.createUser(user);
    }
  
    @Delete(':id')
    deleteUser(@Param() id) {
      return this.userService.deleteUser(id);
    }
  
    @Patch(':id')
    updateUser(@Param('id') id, @Body() user) {
        console.log(user);
        
      return this.userService.updateUser(id, user);
    }
  }