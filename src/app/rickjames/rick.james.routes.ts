import { RouterModule } from '@angular/router'
import { RickJamesComponent } from './rick.james.component'
import { SuperFreakComponent } from './super.freak.component'
import { SongComponent } from './song.component'

export const RickJamesRoutes = RouterModule.forChild(
  [
    { path: '', component: RickJamesComponent },
    { path: 'superfreak', component: SuperFreakComponent },
    { path: ':song', component: SongComponent }
  ])
