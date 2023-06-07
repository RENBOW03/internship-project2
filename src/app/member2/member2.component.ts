import { Component } from '@angular/core';
import { DatapassService } from '../datapass.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member2',
  templateUrl: './member2.component.html',
  styleUrls: ['./member2.component.css']
})
export class Member2Component {

  constructor(private datapass : DatapassService,private router : ActivatedRoute){
    let idx = router.snapshot.params['index'];
    console.log(datapass.cars[idx].model);
  }
}
