import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  imports:[FormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  users:{email:string,password:string}[] = [];
  register() {
    const newUser = {email:this.email,password:this.password};
    this.users.push(newUser);
    localStorage.setItem('users',JSON.stringify(this.users))
  }
}