import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from '@environment/environment'

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  url
  resp

  constructor(private http: HttpClient) { }

  searchTeams(title:string): Observable<any> {
    this.url = `${environment.baseApiUrl}teams?q=${encodeURI(title)}`
    return this.http.get<any>(this.url).pipe(map(res => this.resp = res))
  }

  getAllTeams() {
    return this.http.get<any>(`${environment.baseApiUrl}teams`)
  }

  getTeamDetails(id) {
    return this.http.get<any>(`${environment.baseApiUrl}teams?id=${id}`)
  }

  getPlayersInTeams(id){
    return this.http.get<any>(`${environment.baseApiUrl}teams/${id}?_embed=players`)
  }

}
