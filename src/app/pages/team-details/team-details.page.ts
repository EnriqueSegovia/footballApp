import { Component, OnInit } from '@angular/core';
import { TeamService } from '@app/services/team.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {
  data
  id

  constructor(
    private teamService: TeamService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.data = {}
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.teamService.getTeamDetails(this.id).subscribe( result => {
      this.data = result[0]
    })
  }
}
