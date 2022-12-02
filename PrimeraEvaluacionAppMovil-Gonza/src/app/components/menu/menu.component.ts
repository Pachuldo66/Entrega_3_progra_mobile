import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'About', url: '/about', icon: 'people' },
    { title: 'Coversor', url: '/coversor', icon: 'heart' },
  ];


  constructor(public navCtrl: NavController, private toastController: ToastController) {

  }

  public cerrarSesion = [
    {title:'Cerrar sesion', url: '/login', icon: 'exit'}
  ];

  async mensaje(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hasta la proximaaa!!!!',
      duration: 2000,
      position: position
    });

    await toast.present();
  }

  ngOnInit() {}

}
