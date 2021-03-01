import { Component, OnInit } from '@angular/core';
import { PlayerService } from '@app/services/player.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.page.html',
  styleUrls: ['./player-details.page.scss'],
})
export class PlayerDetailsPage implements OnInit {
  data
  id

  constructor(
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.data = {}
      this.id = this.activatedRoute.snapshot.paramMap.get('id')
      this.playerService.getPlayerDetails(this.id).subscribe( result => {
        this.data = result[0]
      }
      )
  }

}
