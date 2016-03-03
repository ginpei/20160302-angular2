import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';

@Component({
	selector: 'my-heroes',

	templateUrl: 'app/heroes.component.html',

	styleUrls: ['app/heroes.component.css'],

	directives: [HeroDetailComponent],

	providers: [HeroService]
})
export class HeroesComponent implements OnInit {
	heroes: Hero[];
	selectedHero: Hero;

	constructor(private _heroService: HeroService) {
	}

	getHeroes() {
		this._heroService.getHeroes()
			.then(heroes=>this.heroes=heroes);
	}

	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}

	ngOnInit() {
		this.getHeroes();
	}
}
