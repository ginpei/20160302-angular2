import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Hero} from './hero';

@Component({
	inputs: ['hero'],

	selector: 'my-hero-detail',

	template: `
		<section *ngIf="hero">
			<h2>{{hero.name}} details!</h2>
			<div><label>id: </label>{{hero.id}}</div>
			<div><label>name: <input [(ngModel)]="hero.name" type="text" placeholder="Superman"></label></div>
		</section>
		<section *ngIf="!hero">
			<h2>Hi.</h2>
		</section>
		`
})
export class HeroDetailComponent {
	hero: Hero;
}
