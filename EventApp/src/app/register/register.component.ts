import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 

  registerform=this.RF.group({
    userid:['',[Validators.required]],
    email:['',[Validators.required]],
    password:['',[Validators.required]],
    dateOfBirth:['',[Validators.required]],
  })
  constructor(private RF:FormBuilder, private data:DataService,private route:Router) { }



  ngOnInit(): void {
  }


  register(){
    var userId=this.registerform.value.userid
    var email=this.registerform.value.email
    var password=this.registerform.value.password
    var date_of_birth=this.registerform.value.dateOfBirth

    if(this.registerform.valid){
      this.data.register(userId,email,password,date_of_birth).subscribe((data:any)=>{
        if(data){
          console.log("data",data)
          alert(data.message)
          this.route.navigateByUrl('/login')
        }
      },(data)=>{
        alert(data.error.message)

      })
    }else{
      alert("failed")
    }
  }

}
