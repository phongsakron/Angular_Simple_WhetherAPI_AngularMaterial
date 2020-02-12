import { SimpleServiceService } from './../service/simple-service.service';
import { Component } from '@angular/core';
import { resolve } from 'url';
import { StringDecoder } from 'string_decoder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private getData: SimpleServiceService
  ) { }
  showFiller = false;
  city: string = '';
  unit = ['Kelvin', 'Celsius', 'Fahrenheit']
  units:string = "Kelvin";
  showContent = false;
  // Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.

  dataMap = {
    "wind": {
      'speed': Number,
      'degree': Number
    },
    "main": {
      "temp": Number,
      "pressure": Number,
      "humidity": Number,
      "temp_min": Number,
      "temp_max": Number
  },
  "name" : String,
  "unit" :''
  }
  SendReq() {
    this.getData.getWetherData(this.city,this.unitToPara(this.units)).then(data => {
      this.dataMap.wind.speed = data['wind']['speed'];
      this.dataMap.wind.degree = data['wind']['degree'];

      this.dataMap.main.temp = data['main']['temp']
      this.dataMap.main.pressure = data['main']['pressure']
      this.dataMap.main.humidity = data['main']['humidity']
      this.dataMap.main.temp_min = data['main']['temp_min']
      this.dataMap.main.temp_max = data['main']['temp_max']

      this.dataMap.name = data['name']
      this.dataMap.unit = this.units
      
      this.showContent=true
    },fail=>{
      window.alert(fail['statusText'])
    }
    )
  }

  unitToPara(unit){
    if (unit == "Kelvin") {
      return('Default')
    }
    else if(unit == "Celsius"){
      return('Metric')
    }
    else if(unit == "Fahrenheit"){
      return('Imperial')
    }else{
      return('Default')
    }
  }
}
