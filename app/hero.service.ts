import {Injectable} from 'angular2/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
	getHeroes() {
		return new Promise<Hero[]>(resolve=>{
			setTimeout(()=>resolve(HEROES), 1000);
		});
	}

	getHero(id) {
		return this.getHeroes()
			.then(heroes=>heroes.filter(hero=>hero.id===id)[0]);
	}
}
