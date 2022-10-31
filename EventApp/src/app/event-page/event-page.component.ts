import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {
  show:boolean=true

  eventForm=this.EF.group({
    eventName:['',[Validators.required]],
    eventDate:['',[Validators.required]],
    userId:['',[Validators.required]],
    Priority:['']
   
  })
  constructor(private EF:FormBuilder,private data:DataService,private route:Router) { }

  ngOnInit(): void {



  }

  Event(){
    var eventName=this.eventForm.value.eventName
    var eventDate=this.eventForm.value.eventDate
    var userId=this.eventForm.value.userId
    var Priority=this.eventForm.value.Priority
   

    if(this.eventForm.valid){
      this.data.event(eventName,eventDate,userId,Priority).subscribe((data:any)=>{
        if(data){
          console.log("datas Event",data)
          // this.route.navigateByUrl('event-delete')
          this.show=false
        }
      },(data)=>{
        alert("error")
      })
    }else{
      alert("Fill Form")
    }
  }

}
