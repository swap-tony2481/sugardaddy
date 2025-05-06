import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:string = ""
  password:string =""
  login(){
    let users = localStorage.getItem('users') || 'default';
    let curr = JSON.parse(users);
    for(let i = 0 ; i < curr.length ; i++){
      if (this.email == curr[i].email && this.password == curr[i].password){
        alert("User is logged in ")
        return ;
      }
    }
    alert("User not found")
    console.log(curr)
    
  }
}
