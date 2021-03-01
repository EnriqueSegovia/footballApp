import { Component, OnInit } from '@angular/core';
import { LeagueService } from '@app/services/league.service'
import { SearchService } from '@app/services/search.service'
import {TeamService } from '@app/services/team.service'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.page.html',
  styleUrls: ['./leagues.page.scss'],
})
export class LeaguesPage implements OnInit {
  leagues
  searchResults
  theTeamSearched
  searchedTeamId
  term
  type
  searching = false

  constructor(
    private leagueService: LeagueService,
    private searchService: SearchService,
    private teamService: TeamService
    ) {}

  ngOnInit() {
    this.getList()
  }

  getList() {
    this.leagueService.getAllLeagues().subscribe(
      response => this.leagues = response
      )
  }

  searchChanged(event): void  {
    this.searching = true
    this.type = 'players'
    this.searchService.searchInDb(this.term, this.type)
    .subscribe(res => {
      for(let i = 0; i<res.length; i++) {
        this.searchedTeamId = res[i].teamId
        console.log(this.searchedTeamId);
    }
      setTimeout(() => {
        this.searchResults = res
        this.searchTheTeam(this.searchedTeamId)
        console.log(this.searchResults);
      }, 200)
    })
  }
  searchTheTeam(id) {
    this.teamService.getPlayersInTeams(id)
    .subscribe(result => {
      this.theTeamSearched = result[0]
      console.log(this.theTeamSearched)
    })
  }


}


