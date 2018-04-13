import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatestMovies(page = 1)
  {
    return this.http.get(this.baseApiPath + '/movie/popular?page=' + page + '&api_key=9686e467b45433db291a7bb10efbe3f1');
  }
  getMoviesDetails(filmeid)
  {
    return this.http.get(this.baseApiPath + '/movie/' + filmeid + '?api_key=9686e467b45433db291a7bb10efbe3f1');
  }


}
