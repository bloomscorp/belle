import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { RequestMapperService } from '../request-mapper.service';

const routes: Routes = [
  {
	 	path: RequestMapperService.ROOT_URL_RELATIVE,
	 	component: LoginComponent
	},
	// {
	// 	path: 'dashboard',
	// 	loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
  //   canActivate:[AuthGuard]
	// },
	// {
	// 	path: 'property',
	// 	loadChildren: () => import('../property/property.module').then(m => m.PropertyModule)
	// },
	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
