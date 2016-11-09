import { Component } from '@angular/core'

@Component({
    template: `
    <p>{{message}}</p>
    <nav>
        <a routerLink="superfreak">superfreak</a>
        <a routerLink="giveittomebaby">give it to me, baby</a>
    </nav>
    <router-outlet></router-outlet>`,
})
export class RickJamesComponent {
    message = 'I\'m Rick James'
}