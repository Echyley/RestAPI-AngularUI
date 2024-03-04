import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { Book } from "../interfaces/books-interface";

@Injectable({
  providedIn: "root",
})
export class ModalUpdateService {
  private backendUrl = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  updateBook(updatedBook: Book): Observable<any> {
    const url = `${this.backendUrl}/books/${updatedBook.id}`;
    return this.http.put(url, updatedBook).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error("Erro na solicitação de atualização:", error);
        return throwError(error);
      })
    );
  }
}
