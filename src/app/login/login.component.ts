import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   
  constructor(private router: Router) { }

    username!: string;
    password!: string;
   
     
     
    login(){
      alert("Successfully Logged In")
       this.router.navigateByUrl('/chat');
    }
}
