import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from '@environment/environment'
import { PlayerDetailsPage } from '@app/pages/player-details/player-details.page';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url
  resp
  leagues

  constructor(
    private http: HttpClient
  ) { }

  searchInDb(title:string, type:string): Observable<any> {
    if(title.length > 3) {
      this.url = `${environment.baseApiUrl}${type}?q=${encodeURI(title)}`
      return this.http.get<any>(this.url).pipe(map(res => this.resp = res))
    }
  }

}

