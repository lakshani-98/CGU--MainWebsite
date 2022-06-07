import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  baseurl: string='http://localhost:3000/';
  
  constructor(private http:HttpClient) { }

  listVacancies(){
    return this.http.get(this.baseurl + 'vacancies/');
  }
  
  ViewVacancies(vacancyId:String){
    return this.http.get(this.baseurl +'vacancies/' + vacancyId);
  }

  addVacancies(vacancyObj: any){
     console.log(vacancyObj);
     return this.http.post(this.baseurl + 'vacancies/' ,vacancyObj );
  }

  deleteVacancies(vacancyId: any){
    console.log(vacancyId);
    return this.http.delete(this.baseurl + 'vacancies/' + vacancyId);
  }

  acceptVacancies(vacancyId: any){
    return this.http.put(this.baseurl + 'vacancies/'  , vacancyId);
  }

  listPendingVacancies(){
    return this.http.get(this.baseurl + 'vacancies/pendingVacancy/');
  }

  listAcceptedVacancies(){
    return this.http.get(this.baseurl + 'vacancies/acceptedvacancy');
  }

  applyVacancies(cvObj: any){
    console.log(cvObj);
    //  return this.http.post(this.baseurl + 'users/' , vacancyObj );
     return this.http.post(this.baseurl + 'vacancies/cv',cvObj );
  }
}



