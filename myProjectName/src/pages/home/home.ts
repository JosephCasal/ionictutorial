import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  navigateToSecondPage(): void {
    this.navCtrl.push('SecondPage', {
      message: "Hello from the HomePage!"
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad fired once, upon page load.');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter is fired just as the page is about to become active.');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter fired each time the page has entered.');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave is fired each time the page is ABOUT to leave.');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave is fired when the user has left the page.');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload ran when the page is about to be destroyed.');
  }

}
