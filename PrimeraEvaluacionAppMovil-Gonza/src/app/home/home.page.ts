import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {  Usuario } from '../interface/interface';
import { BasedatosService } from 'services/basedatos_service'; 
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  headertitle = 'Home';
  isNotLogin = true;
  Usuario: Usuario[] = [];

  constructor(
    public basedatosService: BasedatosService,
    public navCtrl: NavController, ) { 

  }

  ngOnInit() {
    console.log('this.usuario', this.Usuario);
    this.getUsuario();
  }

getUsuario(){
  const enlace = 'Usuario';
  this.basedatosService.getUsuario<any>(enlace).subscribe(res => {
    console.log(res);
    this.Usuario = res; 
  });
}

}
