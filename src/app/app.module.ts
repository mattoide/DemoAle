import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register-component/register.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MultiSelectModule} from 'primeng/multiselect';
import { HttpClientModule } from '@angular/common/http';
import {MessageService} from 'primeng/api';

import {ToastModule} from 'primeng/toast';

import {FileUploadModule} from 'primeng/fileupload';






@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MultiSelectModule,
    HttpClientModule,
    ToastModule,
    FileUploadModule
  
  ],
  providers: [MessageService],
  bootstrap: [RegisterComponent]
})
export class AppModule { }
