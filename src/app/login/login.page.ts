import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  form!: FormGroup;
  email: string; //sa email save sa console
  password: string; //sa psw save  sa console
  
  constructor(private router: Router, private formBuilder: FormBuilder) { 
    
  }
  
  /*public form = {
    email: "",  //sa forms to
    Password: ""
  }*/

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
    }
  login() {
    this.router.navigate(['dashboard']);
  }
  login2() {
    this.router.navigate(['dashboard2']);
  }
  login3() {
    this.router.navigate(['admin-dashboard']);
  }
  print() {
    //console.log(this.form); // pag sa forms to
    console.log('Email: ',this.email);
    console.log('Password: ', this.password);
  }
}
