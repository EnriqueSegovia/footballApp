import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { LeagueService } from '@app/services/league.service'
import { ILeague } from '@app/model/ILeague.interface'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-league-details',
  templateUrl: './league-details.page.html',
  styleUrls: ['./league-details.page.scss'],
})
export class LeagueDetailsPage implements OnInit {
  data = ''
  id

  constructor(
    private leagueService: LeagueService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.getDetail(this.id)
  }

  getDetail(id) {
    this.leagueService.getLeagueDetails(id).subscribe( result => {
      this.data = result
      console.log(this.data);
      }
    )
  }
}
