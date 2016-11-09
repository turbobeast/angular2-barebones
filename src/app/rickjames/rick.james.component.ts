import { Component } from '@angular/core'

@Component({
    template: `
    <p>{{message}}</p>
    <nav>
        <a routerLink="superfreak">superfreak</a>
    <router-outlet></router-outlet>`,
})
export class RickJamesComponent {
    message = 'I\'m Rick James'
}