import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookShelfComponent } from './components/book-shelf/book-shelf.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalUpdateComponent } from './components/modal-update/modal-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookShelfComponent,
    RegisterComponent,
    ModalUpdateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, MatDialogModule, BrowserAnimationsModule, ReactiveFormsModule,  MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
