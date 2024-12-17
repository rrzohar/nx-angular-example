import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '@learn-and-dev/types';
import { ExampleComponent } from '@learn-and-dev/ui';

@Component({
  imports: [RouterModule, CommonModule, ExampleComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'learn-and-dev';
  user: User = {
    id: 1,
    name: 'Zohar',
    city: 'Dimona',
  };
}
