import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

/*
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'about', url: '/about', icon: 'paper-plane' },
    { title: 'coversor', url: '/coversor', icon: 'heart' },
  ];
*/

  constructor(public navCtrl: NavController) {

  }
/*
  cerrarSesion(){
    this.navCtrl.navigateRoot('login')
  }
*/
}
