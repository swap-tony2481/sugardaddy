import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template:'<main><router-outlet/><main>'
})
export class AppComponent {
  title = 'user-auth';
}
