import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from './loading-bar.service';

@Component({
	selector: 'my-loading-bar',
	templateUrl: './loading-bar.component.html',
	styleUrls: ['./loading-bar.component.scss'],
	providers: [
		LoadingBarService
	]
})

export class LoadingBarComponent {
	constructor(private loadingBarService: LoadingBarService) {
		setTimeout(() => {
			loadingBarService.init();
		}, 500);
	}
}
