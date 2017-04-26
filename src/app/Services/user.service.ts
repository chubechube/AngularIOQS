import { Injectable }             from '@angular/core';
import { Headers,Response, Http } from '@angular/http';
import { Observable }             from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';

import { User } from '../Users/user';


@Injectable()
export class UserService {
    private usersUrl = 'api/users';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});
    private baseUrl: string = 'http://192.168.1.8:3030';

   constructor(private http: Http) { }

   getAll(): Observable<User[]>{
    
    let user$ = this.http
      .get(`${this.baseUrl}/pahtfinderUsers`, {headers: this.getHeaders()})
      .map(mapUser);
      return user$;
  }

 


  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }





    getUsers(): Promise<User[]> {
      return this.http.get(this.usersUrl)
                .toPromise()
                .then(response => response.json().data as User[])
                .catch(this.handleError);
    }
  
    
      
    getUserID(id: String): Observable<User> {
      const url = `${this.baseUrl}/pahtfinderUsers?user_id=${id}`;
      let user$ = this.http
      .get(`${this.baseUrl}/pahtfinderUsers?user_id=${id}`, {headers: this.getHeaders()})
      .map(mapSingleUser);
      return user$;
    }

    update(user: User): Promise<User> {
      const url = `${this.usersUrl}/${user.id}`;
      return this.http
        .put(url, JSON.stringify(user), {headers: this.headers})
        .toPromise()
        .then(() => user)
        .catch(this.handleError);
    }

    create(name: string,password: string,email: string): Promise<User> {
      return this.http
        .post(this.usersUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as User)
        .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
      const url = `${this.usersUrl}/${id}`;
      return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}


function mapSingleUser(response:Response): User{
  var user = response.json().map(toUser);
  console.log(user);
  return user[0];
}

function mapUser(response:Response): User[]{
   // The response of the API has a results
   // property with the actual result
   return response.json().map(toUser);
}

function toUser(r:any): User{

  let user = <User>({
    _id                 : r._id,
    userName            : r.userName,
    userPassword        : r.userPassword,
    userEmail           : r.userEmail,
    playerName          : r.playerName,
    playerLevel         : r.playerLevel,
    playerClass         : r.playerClass,
    userMemorizedSpells : r.userMemorizedSpells
    
  });
  
  return user;
}


