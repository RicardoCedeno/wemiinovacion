import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  /**
   * Contiene la url base de la cual se obtendrán los datos de los usuarios de github
   */
  private url="https://api.github.com/users"

  constructor(private httpclient:HttpClient) { }

  /**
   * Método para obtener datos de "https://api.github.com/users/{username}"
   * @param username
   * @returns  observable al cual habrá que suscribirse
   */
  getUser(username:String):Observable<any>{
    return this.httpclient.get(`${this.url}/${username}`).pipe(catchError(this.errorHandler))
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error.message)

  }

}
