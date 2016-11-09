import { Component } from '@angular/core'
import { Lyrics } from './services/lyrics.service'

@Component({
    selector: 'turbo-app',
    template: `<p>{{message}}</p>
            <nav>
                <a routerLink="/">home</a>
                <a routerLink="rickjames">rick james</a>
            </nav>
            <router-outlet></router-outlet>`,
})
export class AppComponent {
    message = ''
    constructor (private lyrics: Lyrics) {
        this.message = this.lyrics.getLine()
    }
}