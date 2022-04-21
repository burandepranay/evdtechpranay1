import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signInForm: any;
 

  constructor(private fb : FormBuilder, private route : Router) { }

  ngOnInit(): void {
    this.signInForm= this.fb.group({
      name : ["",[Validators.required, Validators.minLength(5)] ],
      password : ["", [Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      email : ["", [Validators.required,Validators.minLength(5)]],
      number : ["", [Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      confirmPassword : ["",[Validators.required]],
      
    },
    {
      validators : this.MustMatch('password','confirmPassword')
    })
  }

  MustMatch(controlName,matchingControlName) {
    return(formGroup : FormGroup)=> {
      const control = formGroup.controls[controlName];
      const matchControl = formGroup.controls[matchingControlName]
      if(matchControl.errors && matchControl.errors.MustMatch ) {
        return
      }
      if(control.value !== matchControl.value) {
        matchControl.setErrors({MustMatch:true})
      }
      else 
      {
        matchControl.setErrors(null);
      }
    }
  }

  get f() {
    return this.signInForm.controls;
  }


  onSubmit() {
    let userDetails = JSON.parse(localStorage.getItem('Data'));
    if(userDetails) {
      let flag = false;
      userDetails.forEach((res)=> {
        if(this.signInForm.value.name === res.name) {
          alert('User is already registered');
          flag = true;
          this.signInForm.reset()
        }
      })
      if(!flag) {
        userDetails.push(this.signInForm.value)
        localStorage.setItem('Data',JSON.stringify(userDetails))
        this.route.navigate(['login'])
      }
      }
     
     else {
      let newArray = [];
      newArray.push(this.signInForm.value);
      localStorage.setItem('Data', JSON.stringify(newArray))
      this.route.navigate(['login'])
    }
  }

  

  

 

  }