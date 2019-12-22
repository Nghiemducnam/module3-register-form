import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
function comparePassword(c: AbstractControl){
  const v = c.value;
  return (v.password === v.confirmPassword) ?null:{
    passwordnotmatch: true
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pwGroup : this.fb.group({
        password:'',
        confirmPassword: ''},
        {validator: comparePassword})
    });

    //update from state
    this.registerForm.patchValue({
      email: 'infor@example.com'
    })
  }
    onSubmit(){
      console.log(this.registerForm)
    }
}
