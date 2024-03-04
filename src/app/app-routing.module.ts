import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { BookShelfComponent } from './components/book-shelf/book-shelf.component';
import { ModalUpdateComponent } from './components/modal-update/modal-update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'bookShelf', component: BookShelfComponent },
  { path: 'update-book/:id', component: ModalUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
