import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
	inputs: ['hero'],

	selector: 'my-hero-detail',

	template: `
		<section *ngIf="hero">
			<h2>{{hero.name}} details!</h2>
			<div><label>id: </label>{{hero.id}}</div>
			<div><label>name: <input [(ngModel)]="hero.name" type="text" placeholder="Superman"></label></div>
		</section>
		`,
	styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
	hero: Hero;

	constructor(
		private _heroService: HeroService,
		private _routeParams: RouteParams) {
	}

	ngOnInit() {
		let id = +this._routeParams.get('id');
		this._heroService.getHero(id)
			.then(hero=>this.hero=hero);
	}
}
