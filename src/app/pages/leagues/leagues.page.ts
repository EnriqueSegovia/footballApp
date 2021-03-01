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
  teamsSearchResults
  theTeamSearched
  searchedTeamId
  term
  type
  searching = false
  teamsView = false

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
    }
      setTimeout(() => {
        this.teamsSearchResults = this.searchTheTeam(this.searchedTeamId)
        this.searchResults = res
      }, 200)
    })
  }
  searchTheTeam(id) {
    this.teamsView = true
    this.teamService.getPlayersInTeams(id)
    .subscribe(result => {
      this.theTeamSearched = result[0]
    })
  }
}


