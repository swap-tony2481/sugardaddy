import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component'
import { AppRoutingModule } from './app-routing.modules';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RegisterComponent,
    AppRoutingModule // 👈 Add this too
  ],
})
export class AppModule { }
