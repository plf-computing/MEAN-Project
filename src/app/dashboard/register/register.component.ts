import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { confirmPasswordValidators } from 'src/app/validators/confirmPassword-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fb = inject(FormBuilder)
  

  registerForm ! : FormGroup

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.compose([Validators.required,Validators.email])],
      userName: ['',Validators.required],
      password: ['',Validators.required],
      confirmPassword: ['',Validators.required],
    },
    {
      validator:confirmPasswordValidators('password','confirmPassword')
    }
    )
    
  }

register(){
  console.log(this.registerForm.value);
  this.registerForm.reset();
  
  
}

}
