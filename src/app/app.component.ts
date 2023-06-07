import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testTypeScript1';
  cars = [
    {brand:"Toyota",model:"vios",year:2012,price:260000},
    {brand:"Honda",model:"jazz",year:2017,price:600000},
    {brand:"Ford",model:"everest",year:2010,price:1600000},
    {brand:"Mitsubishi",model:"strada",year:2009,price:500000},
    {brand:"Mazda",model:"mazda 2",year:2009,price:585000},
  ];

car: any;
brand = '';
model:string ='';
year;
inputBrand:any;

  constructor(){
    this.car = JSON.stringify(this.cars[0]);
    this.brand = this.cars[0].brand;
    this.model = this.cars[0].model;
    this.year = this.cars[0].year;
    
  }

  showData(){
    console.log(this.inputBrand);
  }
}
 