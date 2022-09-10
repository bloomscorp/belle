import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { RequestMapperService } from 'src/app/request-mapper.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventLogDetailsComponent } from './event-log-details/event-log-details.component';

const routes: Routes = [
	{
		path: RequestMapperService.ROOT_URL_RELATIVE,
		component: EventComponent,
		pathMatch: 'full'
	},
	{
		path: 'event',
		children: [
			{
				path: ':id',
				component: EventDetailsComponent,
			},
			{
				path: ':id/event-log',
				component: EventLogDetailsComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EventRoutingModule { }
