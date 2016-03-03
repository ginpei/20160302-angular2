import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService {
	getHeroes() {
		return new Promise((resolve, reject)=>{
			setTimeout(()=>resolve(HEROES), 1000);
		});
	}
}
