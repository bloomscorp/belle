import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PropertyComponent } from './property/property/property.component';
import { AuthGuard } from './login/guard/auth.guard';
import { RequestMapperService } from './request-mapper.service';

const routes: Routes = [
  // { 
  //   path:'', 
  //   redirectTo:'/login', 
  //   pathMatch: 'full'
  // },
  // {
  //   path:'login',
  //   component: LoginComponent
  // },
  // {
  //   path:'dashboard',
  //   component: DashboardComponent,
  //   
  
  // },
  // {
  //   path:'property',
  //   component: PropertyComponent,
  // },
  // {
  //   path:'**',
  //   redirectTo:'/login',
  // },
  {
		path: RequestMapperService.LOGIN_URL,
		loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
	},
  {
		path: RequestMapperService.DASHBOARD_URL,
    canActivate:[AuthGuard],
		loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
	},
  {
		path: RequestMapperService.PROPERTY_URL,
    canActivate:[AuthGuard],
		loadChildren: () => import('./property/property.module').then((m) => m.PropertyModule)
	},
  {
		path: RequestMapperService.ROOT_URL_RELATIVE,
		redirectTo: RequestMapperService.LOGIN_URL,
    pathMatch: 'full'
	},
	// { 
	// 	path: '**',
	// 	redirectTo: RequestMapperService.LOGIN_URL,
  //   pathMatch: 'full'

	// },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
