import { HttpClient, HttpErrorResponse, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CrudService {
  private backendUrl = "http://localhost:8080";

  private urlDelete = "http://localhost:8080/books";

  constructor(private http: HttpClient) {}

  findAllBooks(searchTerm: string): Observable<any> {
    return this.http.get(`${this.backendUrl}/books?searchTerm=${searchTerm}`);
  }

  //Create
  createBook(book: any): Observable<any> {
    return this.http.post(`${this.backendUrl}/books`, book);
  }

  //Read
  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.backendUrl}/books`);
  }

  //Update
  updateBook(id: number, formData: FormData): Observable<FormData>{
    const url = `${this.backendUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }

  //Delete
  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.urlDelete}/${id}`);
  }
}
