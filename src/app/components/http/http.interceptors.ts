import { Injectable } from '@angular/core';
import {
	Http,
	ConnectionBackend,
	RequestOptions,
	RequestOptionsArgs,
	Request,
	Response,
	Headers
} from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { LoadingBarService } from '../loading-bar/loading-bar.service';

@Injectable()
export class HttpInterceptors extends Http {
	loadingBarService: LoadingBarService;

	constructor(backend: ConnectionBackend,
	            defaultOptions: RequestOptions) {
		super(backend, defaultOptions);
	}

	request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
		console.log('entry request');
		return super.request(url, options)
			.finally(() => {
				this.response();
			});
	}

	response() {
	}

	reponseError() {
	}
}
