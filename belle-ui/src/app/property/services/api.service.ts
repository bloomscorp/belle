import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient){ }

  postProperty(data : any)
  {
    let headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')
    })
    console.log(headers)
    console.log(localStorage.getItem('token'))
    return this.http.post<any>("http://localhost:3000/api/v1/property",data,{headers})
  }
  
  getProperties()
  {
    let headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')
    })
    return this.http.get<any>("http://localhost:3000/api/v1/property",{headers})
  }

  putProduct(data : any, id : string){
    let headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')
    })
    return this.http.put<any>("http://localhost:3000/api/v1/property/"+id,data,{headers})
  }

  deleteProduct(id : string){
    let headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')
    })
    return this.http.delete<any>("http://localhost:3000/api/v1/property/"+id,{headers})
  }

  getPropertById(id: number){
    let headers = new HttpHeaders({
      'Authorization':'Bearer ' + localStorage.getItem('token')
    })
    return this.http.get<any>("http://localhost:3000/api/v1/property/id",{headers})
  }
}
