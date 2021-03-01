import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from '@environment/environment'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }


}