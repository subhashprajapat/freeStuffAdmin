import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    data: any = []
    constructor(private router: Router, private restService : RestService) {}
    user = {
        username: '',
        password: ''
      };
      userform = new FormGroup({
        email: new FormControl(this.user.username, [Validators.required]),
        password: new FormControl(this.user.password, [Validators.required, Validators.minLength(5)])
      });
    ngOnInit() {
      
    }
   
    onLogin(user) {
        let req = {
            username: user.username,
            password: user.password
          };
          console.log('user', user);
        try {
          this.restService.getAuthors(req)
            .subscribe(resp => {
              console.log(resp, "res",resp.token);
              this.data = resp
              localStorage.setItem('access_token',resp.token);
              this.router.navigate(['/dashboard']);
              this.restService.getAuth()
              .subscribe(resp => {
                console.log(resp, "resrttrtrtrt");
                
              },
                error => {
                  console.log(error, "error");
                });
            },
              error => {
                console.log(error, "error");
              })
        } catch (e) {
          console.log(e);
        }
      }
}
