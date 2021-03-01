import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { LeagueService } from '@app/services/league.service'

@Component({
  selector: 'app-league-details',
  templateUrl: './league-details.page.html',
  styleUrls: ['./league-details.page.scss'],
})
export class LeagueDetailsPage implements OnInit {
  data
  id
  teams

  constructor(
    private activatedRoute: ActivatedRoute,
    private leagueService: LeagueService,
    ) { }

    ngOnInit() {
      this.data = {}
      this.id = this.activatedRoute.snapshot.paramMap.get('id')
      this.leagueService.getLeagueDetails(this.id).subscribe( result => {
        this.data = result[0]
      }
      )
      this.getTeamsInLeague(this.id)
    }

    getTeamsInLeague(id) {
      this.teams = ''
      this.leagueService.getTeamsInLeague(this.id).subscribe(result => {
        this.teams = result.teams
      })
    }
}
