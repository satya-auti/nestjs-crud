import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  users = [];

  getUser() {
    return this.users;
  }

  getSpecificUser(index) {
    
    return  this.users[index];
  }

  createUser(user) {
    this.users.push(user);
    return user;
  }

  deleteUser(index) {
     this.users.splice(index, 1);
     return this.users; 
  }

  updateUser(id, user) {
    // return (this.users[id] = user);
    this.users[id] = user;

    return this.users[id];

  }
}