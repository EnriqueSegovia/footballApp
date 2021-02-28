import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { LeagueService } from '@app/services/league.service'
import { ILeague } from '@app/model/ILeague.interface'

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.page.html',
  styleUrls: ['./leagues.page.scss'],
})
export class LeaguesPage implements OnInit {
  leagues
  term: string = ''

  constructor(private leagueService: LeagueService) {
  }

  ngOnInit() {

    this.getList()
  }

  getList() {
    this.leagueService.getAllLeagues().subscribe(
      response => this.leagues = response
      )
    console.log(this.leagues)
  }

  searchChanged(): void  {
    // this.results =  this.leagueService.searchLeague(this.term)
  }

}
