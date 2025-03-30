import { Controller, Get } from '@nestjs/common';

@Controller('users') // ✅ ตรงนี้กำหนดเส้นทางให้เป็น /users
export class UsersController {
  private users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com' },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com' },
    { id: 6, name: 'Eve Wilson', email: 'eve@example.com' },
    { id: 7, name: 'Frank Martinez', email: 'frank@example.com' },
    { id: 8, name: 'Grace Thompson', email: 'grace@example.com' },
  ];

  @Get()
  getUsers() {
    return this.users;
  }
}
