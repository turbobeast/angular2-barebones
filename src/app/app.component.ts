import { Component } from '@angular/core'
import { Lyrics } from './services/lyrics.service'

@Component({
    selector: 'turbo-app',
    styles: [`
        * {
            font-family: Arial;
        }
        a {
            text-decoration: none;
            color: #
        }
        a.active {
            color: #000000
        }
    `],
    template: `<p>{{message}}</p>
            <nav>
                <a
                    routerLink="/"
                    routerLinkActive="active"
                    [routerLinkActiveOptions]="{exact:true}">home</a>

                <a 
                    routerLink="rickjames"
                    routerLinkActive="active">rick james</a>
            </nav>
            <router-outlet></router-outlet>`,
})
export class AppComponent {
    message = ''
    constructor (private lyrics: Lyrics) {
        this.message = this.lyrics.getLine()
    }
}