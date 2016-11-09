import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RickJamesComponent } from './rick.james.component'
import { SuperFreakComponent } from './super.freak.component'
import { RickJamesRoutes } from './rick.james.routes'

@NgModule({
    imports: [CommonModule, RickJamesRoutes],
    declarations: [RickJamesComponent, SuperFreakComponent]
})
export class RickJamesModule {}