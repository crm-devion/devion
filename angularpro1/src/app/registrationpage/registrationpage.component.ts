import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-registrationpage',
  templateUrl: './registrationpage.component.html',
  styleUrls: ['./registrationpage.component.scss']
})
export class RegistrationpageComponent implements OnInit {
  registerForm: FormGroup;
    submitted = false;
   public userinfo = [];

  constructor(private router: Router,private formBuilder: FormBuilder,private _http:HttpService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required,Validators.email],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  events: any[] = [];
  currentEvent: any = {id: null, username: '', email: '', password: ''};

  submit(form):void{
   
    this.submitted = true;
 
        // stop the process here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
    console.log("form submitted");
    // console.log(form.value);
    // this._http.register(form.value).subscribe((res) => {
    //   this.router.navigate(['/home']);
    // createEvent() {
      const newEvent = {
        username: this.registerForm.get('username').value,
        email: this.registerForm.get('email').value,
        password: this.registerForm.get('password').value,};
        this._http.createEvent(newEvent).then(() => {
          this.router.navigate(['/home']);
        });
      };
    
}
  
