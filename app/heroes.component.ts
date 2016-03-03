import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';

@Component({
	selector: 'my-heroes',

	templateUrl: 'app/heroes.component.html',

	styleUrls: ['app/heroes.component.css'],

	directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
	heroes: Hero[];
	selectedHero: Hero;

	constructor(
		private _router: Router,
		private _heroService: HeroService) {
	}

	getHeroes() {
		this._heroService.getHeroes()
			.then(heroes=>this.heroes=heroes);
	}

	gotoDetail() {
		let link = ['HeroDetail', { id:this.selectedHero.id }];
		this._router.navigate(link);
	}

	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}

	ngOnInit() {
		this.getHeroes();
	}
}
