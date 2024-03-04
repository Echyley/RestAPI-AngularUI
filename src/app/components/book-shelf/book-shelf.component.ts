import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { ModalUpdateService } from 'src/app/services/modal-update.service';
import { Book } from 'src/app/interfaces/books-interface';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalUpdateComponent } from '../modal-update/modal-update.component';

@Component({
  selector: 'app-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.css'],
})
export class BookShelfComponent {
  books: any[] = [];
  selectedBook: Book | null = null;
  editedBook: any = {};

  public titleList: Array<any> = [];

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private crudService: CrudService,
    private modalUpdateService: ModalUpdateService
  ) {}

  ngOnInit(): void {
    this.getBook();
  }

  //Read
  getBook() {
    this.crudService.getBooks().subscribe((books: any[]) => {
      this.books = books;
    });
  }

  //Update
  openEditModal(book: Book) {
    console.log('Book selected to update:' + book)
    this.editedBook = { ...book };
    this.selectedBook = book;
    const dialogRef = this.dialog.open(ModalUpdateComponent, {
      data: book,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }

  //Delete
  deleteBook(id: number) {
    this.crudService.deleteBook(id).subscribe(() => {
      console.log('Book deleted');
      this.getBook();
    });
  }
}
