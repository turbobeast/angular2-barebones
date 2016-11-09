import { RouterModule } from '@angular/router'
import { RickJamesComponent } from './rick.james.component'
import { SuperFreakComponent } from './super.freak.component'

export const RickJamesRoutes = RouterModule.forChild(
  [
    { path: '', component: RickJamesComponent },
    { path: 'superfreak', component: SuperFreakComponent }
  ])
