import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestMapperService } from '../request-mapper.service';
import { AuthGuard } from '../login/guard/auth.guard';

const routes: Routes = [
  {
		path: RequestMapperService.ROOT_URL_RELATIVE,
    canActivate:[AuthGuard],
		component: DashboardComponent,
    pathMatch: 'full'
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
