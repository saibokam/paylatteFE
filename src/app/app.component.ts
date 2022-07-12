



import { Component,  OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from './services/token.service';
import { JarwisService } from './services/jarwis.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public loggedIn: boolean;
  title = 'ang';
// public mytext="postfix";
  
  constructor(
    private Auth: AuthService,
    private router: Router,
    private Token: TokenService,
    public _js:JarwisService
  ) { }
  fname:string
  lname:string
  ngOnInit() {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    
  }
  
  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/home');
    alert('User successfully logout');

  }

 
}







// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }








// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'ang';
// }




// export class AppComponent implements OnInit {
//   title = 'ang';
  
//   }
//   ngOnInit() {
//    this.check.log.next(null)
//     console.log("login value: "+this.check.log.value)
//     this.success()
//   }

  

// }
