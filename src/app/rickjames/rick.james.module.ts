import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RickJamesComponent } from './rick.james.component'
import { SuperFreakComponent } from './super.freak.component'
import { SongComponent } from './song.component'
import { RickJamesRoutes } from './rick.james.routes'
import { Lyrics } from '../services/lyrics.service'

@NgModule({
    imports: [CommonModule, RickJamesRoutes],
    declarations: [RickJamesComponent, SuperFreakComponent, SongComponent],
    providers: [Lyrics]
})
export class RickJamesModule {}