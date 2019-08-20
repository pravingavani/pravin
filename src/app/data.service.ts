import { BadInput } from './Bad-input';
import { AppError } from './app-error';
import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NotFoundError } from './not-found-error';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor( private url: string, private http: HttpClient) { }
  getAll(){
    return this. http.get(this.url)
    .pipe(map(response => response))
    .pipe(catchError((this.handleError)));
  }
  create(resource){
    return this.http.post( this.url,resource)
    .pipe(map(response => response))
    .pipe(catchError((this.handleError)));
  }
  update(resource)
  {
   return this.http.patch(this.url + '/' + resource.id,({ isRead:true}))
   .pipe(map(response => response))
   .pipe(catchError((this.handleError)));
  }
  delete(id){
    return this.http.delete(this.url + '/' + id)
    .pipe(map(response => response))
    .pipe(catchError((this.handleError)));
  
  }
   private handleError(error:Response){
    if(error.status === 400)
        return Observable.throw(new BadInput(error.json()));
      
    if(error.status === 404)
    return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));

   }
}
