import { Component, OnInit } from '@angular/core';
import { TeamService } from '@app/services/team.service'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  teams

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.getList()
  }

  getList() {
    this.teamService.getAllTeams().subscribe(
      response => {
        this.teams = response
        console.log(this.teams);
      }
    )
  }

}
