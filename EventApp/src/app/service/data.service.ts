import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient) { }


  register(userId:any,email:any,password:any,date_of_birth:any){
    const data={
      userId,
      email,
      password,
      date_of_birth
    }
    return this.http.post('http://localhost:3000/register',data)
    
  }

  login(email:any,password:any){
    const data={
      email,
      password
    }
    return this.http.post('http://localhost:3000/login',data)
  }
  event(eventName:any,eventDate:any,userId:any,Priority:any){
    const data={
      eventName,
      eventDate,
      userId,
      Priority
     
    }
    return this.http.post('http://localhost:3000/api/event',data)
  }
  geteventList(){
    return this.http.get('http://localhost:3000/api/add')
  }
  // delete(id:any){
  //   return this.http.delete('http://localhost:3000/api/'+id)

  // }
  postdelete(eventName:any,eventDate:any,userId:any){
   const data={
    eventName,
    eventDate,
    userId

    }
    return this.http.post('http://localhost:3000/api/deleteadd',data)
  }
}
