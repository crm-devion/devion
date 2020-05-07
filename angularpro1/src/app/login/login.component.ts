import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
    submitted = false;
  

  constructor(private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  submit():void{
    this.submitted = true;
 
        // stop the process here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
    console.log("form submitted");
    this.router.navigate(['/home'])
  }

}
