import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testangular';
  showSideMenu: boolean = false;

  hideMenu(){
    this.showSideMenu = !this.showSideMenu;
  }


}
