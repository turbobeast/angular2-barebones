import { Component } from '@angular/core'
import { Lyrics } from '../services/lyrics.service';
import { ActivatedRoute } from '@angular/router'
import 'rxjs/add/operator/map'

@Component({
    template: `
    <p>{{songLine | async}}</p>
    `,
})
export class SongComponent {
    songLine;
    constructor (private route: ActivatedRoute, private lyrics: Lyrics) {
      this.songLine = route.params
        .map((param: { song: string }) => lyrics.getLineForSong(param.song))
    }
}