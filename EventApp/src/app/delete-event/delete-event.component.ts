import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit {
  Event:any
  
  // postDeleteevent:any
  constructor(private data:DataService,private http:HttpClient) { }

  ngOnInit(): void {
    this.getEvent()
  }

  getEvent(){
    this.data.geteventList().subscribe((data:any)=>{
       this.Event=data
      console.log("Events datasss",Event)
    })
  }

  deleteEvent(id:any){
    if(confirm('Are you sure you want to delete this event'))
     this.http.delete('http://localhost:3000/api/'+id).subscribe(data=>{
        console.log("delete datasss",data)
        this.http.post('http://localhost:3000/api/deleteadd',data).subscribe(data=>{
          if(data){
            console.log("dadada",data)
          } 
        })
    },err=>{
      console.log("error",err)
    })
    
  }

  
  
}
