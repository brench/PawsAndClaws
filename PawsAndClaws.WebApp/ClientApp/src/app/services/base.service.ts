import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Appointment } from "../model/appointment";


@Injectable()
export class BaseService {

  private basePath: string = 'https://localhost:44383/';
  // protected apiUrl: string;

  constructor(private http: HttpClient) { }

  protected get<T>(url: string) : Observable<T> {
    return this.http.get<T>(`${this.basePath}${url}`);
  }

  protected post<T>(url: string, data: T): Observable<any> {
    return this.http.post(`${this.basePath}${url}`, data);
  }

  protected put<T>(url: string, data: T): Observable<any> {
    return this.http.put(`${this.basePath}${url}`, data);
  }

  protected delete(url: string, id: number): Observable<any> {
    return this.http.delete(`${this.basePath}${url}${id}`);
  }
}
