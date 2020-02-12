import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SimpleServiceService {

  constructor(
    private http: HttpClient,
    
  ) { }
  private apiKey = 'e7ff0913709bafe4f912a890a7e60c61'
  getWetherData(city:string,unit:string = "Default") {
    let promise = new Promise((resolve, reject) => {
      let apiURL = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units='+unit+'&'+'appid='+this.apiKey;
      console.log(apiURL);
      
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => { // Success
            // this.results = res.json().results;
            // console.log(res)
            resolve(res);
          },
          msg => { // Error
            reject(msg);
          }
        );
    });
    return promise;
  }
}


