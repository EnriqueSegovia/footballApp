import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ILeagues } from '@app/model/ILeague.interface'
import { environment } from '@environment/environment'

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private url: string = ''

  constructor(private http: HttpClient) { }

  searchLeague(title:string) {
    this.url = `${environment.baseApiUrl}leagues?q=${encodeURI(title)}`
    console.log(this.url);
    return this.http.get<ILeagues[]>(this.url)
  }

  getLeagueDetails(id:string) {
     return this.http.get<ILeagues>(`${environment.baseApiUrl}leagues?leagueId=${id}`)
  }
}
