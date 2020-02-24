import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register-component/register.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AlertCustomComponentComponent } from './components/alert-custom-component/alert-custom-component.component';









@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
     AlertCustomComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    // NgbModule
  
  ],
  providers: [],
  bootstrap: [RegisterComponent]
})
export class AppModule { }
