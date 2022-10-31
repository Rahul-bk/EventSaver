import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trash-event',
  templateUrl: './trash-event.component.html',
  styleUrls: ['./trash-event.component.css']
})
export class TrashEventComponent implements OnInit {
  Trash:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getTrash()
  }

  getTrash(){
    this.http.get('http://localhost:3000/api/trash').subscribe(data=>{
      this.Trash=data
    },err=>{
      console.log(err)
    })
  }

}
