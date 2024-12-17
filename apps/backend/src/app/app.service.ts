import { Injectable } from '@nestjs/common';
import { User } from '@learn-and-dev/types';

@Injectable()
export class AppService {
  getData(): User {
    const user: User = {
      id: 1,
      name: 'Zohar',
      city: 'Dimona',
    };
    return user;
  }
}
