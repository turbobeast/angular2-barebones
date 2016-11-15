import { RouterModule } from '@angular/router'
import { AwesomeComponent } from './awesome.component'
import { ModuleWithProviders } from '@angular/core'

export const AppRoutes = RouterModule.forRoot(
  [
    { path: '', component: AwesomeComponent },
    { path: 'rickjames', loadChildren: './rickjames/rick.james.module#RickJamesModule' }
  ])
