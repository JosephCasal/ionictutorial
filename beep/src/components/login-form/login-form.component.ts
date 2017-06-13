import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account/account.interface';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  account = {} as Account;
  @Output() loginStatus: EventEmitter<any>;

  constructor(private afAuth: AngularFireAuth, private navCtrl: NavController) {
    this.loginStatus = new EventEmitter<any>();
  }

  async login(){
    try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password);
      this.loginStatus.emit(result);
    }catch(e){
      this.loginStatus.emit(e);
    }
  }

  navigateToPage(pagename: string) {
    pagename === 'TabsPage' ? this.navCtrl.setRoot(pagename) : this.navCtrl.push(pagename);
  }

}
