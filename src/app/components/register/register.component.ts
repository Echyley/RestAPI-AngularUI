import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private crudService: CrudService) {}

  createBook(event: Event) {
    event.preventDefault();

    const title = (event.target as any).title.value;
    const genre = (event.target as any).genre.value;
    const size = (event.target as any).size.value;

    if (title === '' || genre === '' || size === '') {
      this.errorAlert();
      return;
    }

    const newBook = {
      title,
      genre,
      size,
    };

    this.crudService.createBook(newBook).subscribe(
      (response) => {
        this.showAlert();
        (event.target as any).reset();
      },
      () => {
        this.errorAlert();
      }
    );
  }

  errorAlert() {
    Swal.fire({
      title: 'Not possible to register!',
      text: ' Fill the required inputs and try again.',
      icon: 'error',
      preConfirm: () => {
        window.location.reload();
      },
    });
  }

  showAlert() {
    Swal.fire({
      title: 'Success!',
      text: 'Product registered successfully',
      icon: 'success',
    });
  }
}
