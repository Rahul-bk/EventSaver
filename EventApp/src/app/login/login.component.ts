import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=this.LF.group({
    email:['',Validators.required],
    password:['',Validators.required],
  })
  constructor(private LF:FormBuilder,private data:DataService,private route:Router) { }

  ngOnInit(): void {
  }

  login(){
   var email=this.loginForm.value.email
   var password=this.loginForm.value.password

   if(this.loginForm.valid){
    this.data.login(email,password).subscribe((data:any)=>{
      if(data){
        alert(data.message)
        this.route.navigateByUrl('event')
      }else{
        alert("error password")
      }
    },(data)=>{
      alert(data.error.message)
      
    })
   }else{
    alert("Not Valid")
   }

  }


}
