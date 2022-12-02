import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  busqueda: string = '';
  headertitle = 'About';
  isNotLogin = true;

  listaUsuario = [
    {
      id: '1',
      nombre: 'Kevin Bustos',
      imagen: '../../assets/img/Kevin.jpeg',
      carrera: 'Ingeniaria en informatica'
    },
    {
      id: '2',
      nombre: 'Gonzalo Villaliboz',
      imagen: '../../assets/img/Gonzalo.jpeg',
      carrera: 'Ingeniaria en informatica'
    }
  ]

  constructor(public navCtrl: NavController) { 

   }

  ngOnInit() {
  }



  iradetalle(usuario){
    const navigationExtras: NavigationExtras = {
      queryParams: {
        usuario : JSON.stringify(usuario)
      }
    };

    this.navCtrl.navigateForward(['detalle'],navigationExtras);
  }

}
