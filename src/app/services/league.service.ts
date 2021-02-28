import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ILeague } from '@app/model/ILeague.interface'
import { environment } from '@environment/environment'

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  url
  resp
  resu


  constructor(private http: HttpClient) { }

  searchLeague(title:string): Observable<any> {
    this.url = `${environment.baseApiUrl}leagues?q=${encodeURI(title)}`
    return this.http.get<any>(this.url).pipe(map(res => this.resp = res))
  }

  getAllLeagues() {
    return this.http.get<any>(`${environment.baseApiUrl}leagues`)
  }

  getLeagueDetails(id) {
     return this.http.get<any>(`${environment.baseApiUrl}leagues?leagueId=${id}`)
  }
}
