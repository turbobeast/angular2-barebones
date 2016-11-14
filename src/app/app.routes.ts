import { RouterModule } from '@angular/router'
import { AwesomeComponent } from './awesome.component'

export const AppRoutes = RouterModule.forRoot(
  [
    { path: '', component: AwesomeComponent },
    { path: 'rickjames', loadChildren: 'rickjames/rick.james.module#RickJamesModule' }
  ])
