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
  leagues: Observable<ILeagues>
  term: string = ''

  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
    this.leagueService.getAllLeagues()
    .subscribe(
      (data) => this.leagues = data)
    )
  }

  // searchChanged(): void  {
  //   this.leagueService.searchLeague(this.term).subscribe(
  //     (data) => this.leagues = data
  //   )
  // }

}
