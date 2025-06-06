import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersResponse } from '../types/Users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  data = httpResource<UsersResponse>(() => 'https://dummyjson.com/users', {
  });
}
