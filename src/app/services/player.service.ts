import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from '@environment/environment'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  url
  resp

  constructor(private http: HttpClient) { }

  searchplayers(title:string): Observable<any> {
    this.url = `${environment.baseApiUrl}players?q=${encodeURI(title)}`
    return this.http.get<any>(this.url).pipe(map(res => this.resp = res))
  }

  getAllPlayers(page) {
    return this.http.get<any>(`${environment.baseApiUrl}players?_page=${page}&_limit=15`)
  }

  paginatePlayers(pag_url) {
    return this.http.get<any>(`${environment.baseApiUrl}players${pag_url}&_limit=15`)
  }

  getPlayerDetails(id) {
    return this.http.get<any>(`${environment.baseApiUrl}players?id=${id}`)
  }

}
