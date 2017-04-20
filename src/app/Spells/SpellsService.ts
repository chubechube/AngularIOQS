import { Injectable }             from '@angular/core';
import { Headers,Response, Http } from '@angular/http';
import { Observable }             from 'rxjs/Rx';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { Spell } from './spell';


@Injectable()
export class SpellsService {
    private spellsUrl = 'api/spell';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});
    private baseUrl: string = 'http://192.168.1.8:3030';

   constructor(private http: Http) { }

  getSpellSub(userClass: String,spellLevel: String): Observable<Spell[]> {
    const url = `${this.baseUrl}/spells?class=${userClass}&level=${spellLevel}`;
    return this.http.get(url)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
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
    level         : r.cleric,
    description   : r.description,
    full_text      : r.full_text
    
  });
  
  return spell;
}