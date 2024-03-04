import { Component, Inject, Input } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Book } from "src/app/interfaces/books-interface";
import { CrudService } from "src/app/services/crud.service";
import { ModalUpdateService } from "src/app/services/modal-update.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-modal-update",
  templateUrl: "./modal-update.component.html",
  styleUrls: ["./modal-update.component.css"],
})
export class ModalUpdateComponent {
  @Input() book: Book;

  constructor(
    public crudService: CrudService,
    public modalUpdateService: ModalUpdateService,
    public dialogRef: MatDialogRef<ModalUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book
  ) {
    this.book = { ...data };
  }

  onSave() {
    const bookData: Book = {
      id: this.book.id,
      title: this.book.title,
      genre: this.book.genre,
      size: this.book.size,
    };

    if (bookData == bookData) {
      this.modalUpdateService.updateBook(bookData).subscribe((response) => {
        this.successAlert();
        this.dialogRef.close();
        setTimeout(() => {
          location.reload();
        }, 2000);
      });
    } else if (bookData == bookData) {
      this.noChangesAlert();
    } else {
      this.errorAlert();
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

  successAlert() {
    Swal.fire({
      title: "Success!",
      text: "Book updated successfully",
      icon: "success",
    });
  }

  noChangesAlert() {
    Swal.fire({
      title: "Wait up!",
      text: 'Click "Cancel" if you dont want to update this book now.',
      icon: "info",
    });
  }

  errorAlert() {
    Swal.fire({
      title: "Update failed!",
      text: "There's something wrong with the requisition! Please try again.",
      icon: "error",
    });
  }
}
