import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu'
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { removeUser, UserState, userValidate } from 'src/app/state';

@Component({
  selector: 'app-header',
  standalone:true,
  imports:[MatMenuModule,CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged$:Observable<boolean> = new Observable();

  constructor(private store:Store<{user:UserState}>) { }

  ngOnInit(): void {

    this.isLogged$ = this.store.select(userValidate);
  }

  logout():void{

    this.store.dispatch(removeUser());
  }

}
