import { Component, OnInit, ViewChild } from '@angular/core'
import { PlayerService } from '@app/services/player.service'

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {
  url: string;
  itemListData = []
  page_number = 1

  constructor(
    private playerService: PlayerService,
  ) { }

  ngOnInit() {
    this.getPlayers(false, "")
  }

  getPlayers(isFirstLoad, event) {
    this.url = '?_page=' + this.page_number

    this.playerService.paginatePlayers(this.url).subscribe(
      response => {
        for (let i = 0; i < response.length; i++) {
          this.itemListData.push(response[i])
        }
        if (isFirstLoad) {event.target.complete()}
        this.page_number++
      }, error => console.log(error)
    )
  }

  doInfinite(event) {
    setTimeout(() => {
      this.getPlayers(true, event)

    }, 1000)
  }
}
