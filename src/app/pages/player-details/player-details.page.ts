import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PlayerService } from '@app/services/player.service'
import { TeamService } from '@app/services/team.service'

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.page.html',
  styleUrls: ['./player-details.page.scss'],
})
export class PlayerDetailsPage implements OnInit {
  data
  team
  id
  team_id

  constructor(
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService,
    private teamService: TeamService,
  ) { }

  ngOnInit() {
    this.data = {}
    this.team_id = ''
      this.id = this.activatedRoute.snapshot.paramMap.get('id')
      this.playerService.getPlayerDetails(this.id).subscribe( result => {
        this.data = result[0]
        this.team_id = this.data.teamId
      }
      )
      this.getTeam(this.team_id)
  }

  getTeam(team_id) {
    this.teamService.getPlayersInTeams(team_id).subscribe( result => {
      this.team = result[0]
      console.log(this.team)
    }
    )
  }

}
