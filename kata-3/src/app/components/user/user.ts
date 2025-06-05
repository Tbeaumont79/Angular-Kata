import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user-service';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
})
export class User {
  userService = inject(UserService);
  users = this.userService.data;
}
