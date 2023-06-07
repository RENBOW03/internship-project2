import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatapassService } from '../datapass.service';

@Component({
  selector: 'app-member1',
  templateUrl: './member1.component.html',
  styleUrls: ['./member1.component.css']
})
export class Member1Component {
idx:any;
  constructor(private router: Router,private data : DatapassService){}
  goToMember2(){
    this.data.cars = [
      {brand:"Toyota",model:"vios",year:2012,price:260000},
      {brand:"Honda",model:"jazz",year:2017,price:600000},
      {brand:"Ford",model:"everest",year:2010,price:1600000},
      {brand:"Mitsubishi",model:"strada",year:2009,price:500000},
      {brand:"Mazda",model:"mazda 2",year:2009,price:585000},
    ];
    this.router.navigateByUrl('/member2/'+this.idx);
  }
}
