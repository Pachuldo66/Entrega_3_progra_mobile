import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Usuario } from '../interface/interface';
import { BasedatosService } from 'services/basedatos_service';
import { async } from '@firebase/util';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  [x: string]: any;
  nuevoUsario: Usuario = {
    nombre: '',
    contrasenia: '',
    id: '',
    email: '',
    imagen: []
  }
  loading: any;
  formularioLogin: FormGroup;
  headertitle = 'Login';
  isNotLogin = false;

    // Lista de usuarios
  usuarios = [
    {
      id: '1',
      nombre: 'Admin',
      contrasenia: '1234'
    },
    {
      id: '2',
      nombre: 'Usuario',
      contrasenia: '1234'
    }
  ]
  constructor(public loadingController: LoadingController,
              public database: BasedatosService,
              public toastController: ToastController,
              public fb: FormBuilder, 
              private alertController: AlertController, 
              public navCtrl: NavController, 
              private loadingCtrl: LoadingController ) { 


    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'contrasenia': new FormControl("",Validators.required)
    })
  }
  ngOnInit() {}
  async save(){
    console.log(this.nuevoUsuario);
    const enlace = 'Usuarios'; 
    const data = this.usuarios;
    this.loadingControler();
    this.presentToast('Usuario Registrado',2000);
    this.loading.dismiss();
    this.Usuario.id = this.database.crearID();
    this.nuevoUsario = {
      nombre: '',
    contrasenia: '',
    id: '',
    email: '',
    imagen: []
    }
    this.database.crearUsuario<Usuario>(this.data, enlace, this.Usuario.id).catch(res => {
      console.log('el error es ',res);
    }); 
    
}
async ingresar(){
  var f = this.formularioLogin.value;
  var u = this.usuarios.values;

  if(('admin' == f.nombre && '123' == f.contrasenia) ||
  ('user' == f.nombre && '123' == f.contrasenia)){


    console.log('Ingresado')

    this.navCtrl.navigateRoot('home')

    const loading = await this.loadingCtrl.create({
    
      message: 'Bienvenido ' + f.nombre,
      duration: 2000,
});

    loading.present();
    
  }else{
    const alert = await this.alertController.create({
      header: 'Datos incorrectos',
      message: 'Los datos ingresados no coinciden',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
}
async presentToast(mensaje:string, tiempo: number) {
  const toast = await this.toastController.create({message: 'mensaje', duration: tiempo});
  mensaje = 'Usuario Registrado';
  toast.present();
}
async presentLoading(mensaje: string) {
  this.loading = await this.loadingController.create({
    message: 'guardando',
  }
)}};