import  { AuthService } from './../services/auth.service';
import { Routing } from './../core/routing';

export class AdminGuard{
constuctor(){
	this._authService = new AuthService();
        this._routing = new Routing();
    
}

canActive(){
	if(!this.authSevice.userIsAdmin){
this._routing.navigate('/');
return false;
	}

	return true
}
}
