import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { LeagueService } from '@app/services/league.service'
import { ILeagues } from '@app/model/ILeague.interface'

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.page.html',
  styleUrls: ['./leagues.page.scss'],
})
export class LeaguesPage implements OnInit {
  results: Observable<ILeagues[]>;
  term: string = ''
  league: string = ''

  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
  }

  searchChanged(): void  {
    this.results = this.leagueService.searchLeague(this.term)
  }

}
