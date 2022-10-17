import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user/user.reducer';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderComponent,
    StoreModule.forRoot({user:userReducer}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
