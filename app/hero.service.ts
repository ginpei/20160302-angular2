import {Injectable} from 'angular2/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
	cache: Hero[] = null;

	getHeroes() {
		return new Promise<Hero[]>(resolve=>{
			if (this.cache) {
				setTimeout(()=>resolve(this.cache), 1);
			}
			else {
				setTimeout(()=>{
					this.cache = HEROES.concat();
					resolve(this.cache)
				}, 1000);
			}
		});
	}

	getHero(id) {
		return this.getHeroes()
			.then(heroes=>heroes.filter(hero=>hero.id===id)[0]);
	}
}
