import {
  Controller,
  Get,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
  Req,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // ✅ Get current user info (protected)
  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  async getProfile(@Req() req) {
    const userId = req.user.userId; // This should match what you return in JwtStrategy
    const user = await this.usersService.findById(userId);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }


  // ✅ Update user
  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() body: any) {
    const updated = await this.usersService.updateUser(id, body);
    if (!updated) throw new NotFoundException('User not found');
    return updated;
  }

  

  // ✅ Delete user
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const deleted = await this.usersService.deleteUser(id);
    if (!deleted) throw new NotFoundException('User not found');
    return { message: 'User deleted successfully' };
  }
}
