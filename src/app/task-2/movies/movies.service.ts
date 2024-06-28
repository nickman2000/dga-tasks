import {Injectable, signal} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, map, Observable, tap} from "rxjs";
import {IMovieModel} from "./movies.model";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  public moviesList$ = signal<IMovieModel[]>([]);

  constructor(private http: HttpClient) {
  }

  getMovieList(title: string): Observable<IMovieModel[]> {
    let headers: HttpHeaders = new HttpHeaders({})
    return this.http.get<any>(`https://online-movie-database.p.rapidapi.com/title/v2/find?title=${title}&limit=10&paginationKey=0&sortArg=moviemeter%2Casc`, {
      headers
    })
      .pipe(map(res => res.results), tap((data: IMovieModel[]) => this.moviesList$.set(data)))
  }
}
