import { Member2Component } from './member2/member2.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { Member1Component } from './member1/member1.component';
import { Routes , RouterModule } from '@angular/router';


const appRoutes : Routes = [
  { path: '', component: Member1Component},
  { path: 'member1', component: Member1Component},
  { path: 'member2/:index', component: Member2Component}
];

@NgModule({
  declarations: [
    AppComponent,
    Member1Component,
    Member2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
