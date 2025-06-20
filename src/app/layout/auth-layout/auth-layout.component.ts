import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  // selector: 'app-auth-layout',
  // imports: [],
  // templateUrl: './auth-layout.component.html',
  // styleUrl: './auth-layout.component.scss'
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`
})
export class AuthLayoutComponent {

}
