import { Component, OnInit } from '@angular/core';
import { LeagueService } from '@app/services/league.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-league-details',
  templateUrl: './league-details.page.html',
  styleUrls: ['./league-details.page.scss'],
})
export class LeagueDetailsPage implements OnInit {
  data
  id

  constructor(
    private leagueService: LeagueService,
    private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
      this.data = {}
      this.id = this.activatedRoute.snapshot.paramMap.get('id')
      this.leagueService.getLeagueDetails(this.id).subscribe( result => {
        this.data = result[0]
        console.log(this.data);
      }
      )
    }
}
