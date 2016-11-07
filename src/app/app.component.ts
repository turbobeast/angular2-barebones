import { Component } from '@angular/core'
import { Lyrics } from './lyrics.service'

@Component({
    selector: 'turbo-app',
    template: `<p>{{message}}</p>`,
})
export class AppComponent {
    message = ''
    constructor (private lyrics: Lyrics) {
        this.message = this.lyrics.getLine()
    }
}