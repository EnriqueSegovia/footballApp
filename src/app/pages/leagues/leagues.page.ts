import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { LeagueService } from '@app/services/league.service'
import { PlayerService } from '@app/services/player.service'

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.page.html',
  styleUrls: ['./leagues.page.scss'],
})
export class LeaguesPage implements OnInit {
  leagues
  searchResults
  term: string = ''

  constructor(
    private leagueService: LeagueService,
    private playerService: PlayerService
    ) {}

  ngOnInit() {
    this.getList()
  }

  getList() {
    this.leagueService.getAllLeagues().subscribe(
      response => this.leagues = response
      )
  }

  searchChanged(): void  {
     this.searchResults =  this.playerService.searchplayers(this.term)
     .subscribe(res => console.log(res))
  }

}
