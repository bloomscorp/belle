import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyComponent } from './property/property.component';
import { RequestMapperService } from '../request-mapper.service';
import { AuthGuard } from '../login/guard/auth.guard';

const routes: Routes = [
  {
		path: RequestMapperService.ROOT_URL_RELATIVE,
    canActivate:[AuthGuard],
		component: PropertyComponent,
    pathMatch: 'full'
	},
  {
    path: ':id',
		canActivate:[AuthGuard],
		loadChildren: () => import('./event/event.module').then((m) => m.EventModule)
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
