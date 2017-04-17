import { Injectable }             from '@angular/core';
import { Headers,Response, Http } from '@angular/http';
import { Observable }             from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';

import { User } from './user';


@Injectable()
export class UserService {
    private usersUrl = 'api/users';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});
    private baseUrl: string = 'http://127.0.0.1:3030';

   constructor(private http: Http) { }

   getAll(): Observable<User[]>{
    
    let user$ = this.http
      .get(`${this.baseUrl}/users`, {headers: this.getHeaders()})
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
  
    getUser(id: number): Promise<User> {
      const url = `${this.usersUrl}/${id}`;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as User)
        .catch(this.handleError);
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



function mapUser(response:Response): User[]{
   // The response of the API has a results
   // property with the actual result
   return response.json().map(toUser);
}

function toUser(r:any): User{

  let user = <User>({
    id            : r.id,
    userName      : r.userName,
    userPassword  : r.userPassword,
    userEmail     : r.userEmail
    
  });
  
  return user;
}


