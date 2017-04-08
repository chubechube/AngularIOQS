import { Injectable }             from '@angular/core';
import { Headers,Response, Http } from '@angular/http';
import { Observable }             from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';

import { Spell } from './spell';


@Injectable()
export class SpellsService {
    private usersUrl = 'api/spell';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});
    private baseUrl: string = 'http://127.0.0.1:32769';

   constructor(private http: Http) { }

   getAll(): Observable<Spell[]>{
    
    let spell$ = this.http
      .get(`${this.baseUrl}/users`, {headers: this.getHeaders()})
      .map(mapSpell);
     
      return spell$;
  }

private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}

function mapSpell(response:Response): Spell[]{
   // The response of the API has a results
   // property with the actual result
   return response.json().map(toSpell);
}

function toSpell(r:any): Spell{

  let spell = <Spell>({
    id            : r.id,
    name          : r.name,
    level         : r.sor,
    
  });
  
  return spell;
}