import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestMapperService {

  public static readonly ROOT_URL: string = '/';
	public static readonly ROOT_URL_RELATIVE: string = '';
	public static readonly LOGIN_URL: string = 'login';
	public static readonly DASHBOARD_URL: string = 'dashboard';
	public static readonly PROPERTY_URL: string = 'property';
	public static readonly EVENT_URL: string = 'property';

  constructor() { }
}
