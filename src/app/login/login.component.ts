import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm: any;
  data;
  constructor(private fb : FormBuilder, private route : Router ) { 
    this.data = localStorage.getItem("details")
  }

  ngOnInit(): void {
    {
      this.signInForm = this.fb.group({
        name: ["", [Validators.required, Validators.minLength(5)]],
        password: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
        })
    }
  }

  get f() {
    return this.signInForm.controls;
  }


  onSubmit() {
    let formData = this.signInForm.value
    
    let allData = JSON.parse(localStorage.getItem('Data'))
    let flag = false;
    
    allData.forEach((res)=> {
      if(formData.name === res.email && formData.password === res.password) {
        this.route.navigate(['dashboard'])
        flag=true;
        localStorage.setItem('new',JSON.stringify(res))
      } 
    })
    if(!flag) {
      alert('please register')
      this.route.navigate(['register'])
    }
  }
  }