import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable()
export class LoadingBarService {
	loadingBar: any;
	loadingBarContainer: any;

	init() {
		this.loadingBarContainer = $('#loading-bar');
		this.loadingBar = this.loadingBarContainer.find('div').eq(0);
		this.loadingBar.css('width', 0);
	}

	start() {
		this.loadingBar.css('width', 25 + '%');
	}
}
