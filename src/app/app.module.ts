import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { AwesomeComponent } from './awesome.component'
import { Lyrics } from './services/lyrics.service'
import { AppRoutes } from './app.routes'

@NgModule({
    imports: [BrowserModule, AppRoutes],
    declarations: [AppComponent, AwesomeComponent],
    bootstrap: [AppComponent],
    providers: [Lyrics]
})

export class AppModule {}