import {Injectable} from '@angular/core';
import {AngularFirestore,
        AngularFirestoreDocument,
        AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Data } from '@angular/router';
import {Observable} from 'rxjs';
import { Usuario } from 'src/app/interface/interface';
import { AlertController } from '@ionic/angular';
@Injectable({
    providedIn: 'root'
})
export class BasedatosService {
  nuevoUsuarios: any;
  modalCtrl: any;
    constructor(
        public Firestore: AngularFirestore, 
        private alertCtrl: AlertController ){}
    //Aqui es el metodo para crear usuarios en la base de datos
    crearUsuario<tipo>(data: tipo, enlace:string, id: string){
        const ref = this.Firestore.collection(enlace);
        return ref.doc(id).set(data);
    };
    crearID(){
        return this.Firestore.createId();
    }
    //Aqui es el metodo para eliminar usuarios en la base de datos
    async deleteUsuario(){
      handler: () => {
        this.nuevoUsuarios.deleteUsuario(this.data);
        this.modalCtrl.dismiss();
        this.toastPresent('User deleted!!!');
      }
        const alert = await this.alertCtrl.create({
          header:'Delete',
          message:'Estas seguro que deseas eliminar al usuario seleccionado?',
          buttons:[
            {
              text:'Cancel',
              role:'cancel',
            },
            {
              text:'Yes',
              role:'confirm',
              
            }
          ]
        });
        alert.present();
      }
  data(data: any) {
    throw new Error('Method not implemented.');
  }
  toastPresent(arg0: string) {
    throw new Error('Method not implemented.');
  }
    //Aqui es el metodo para obtener usuarios en la base de datos, algo YA CREADO DE ANTEMANO
    getUsuario<tipo>(enlace: string): Observable<tipo[]>{
      const ref =  this.Firestore.collection<tipo>(enlace);
      return ref.valueChanges();
    };
    //Aqui es el metodo para crear contraseña en la base de datos
    crearContrasena <tipo>(data: tipo, enlace:string, id: string){ 
        const ref = this.Firestore.collection(enlace);
        return ref.doc(id).set(data);
    };
    //Aqui es el metodo para obtener email en la base de datos, algo YA CREADOS DE ANTEMANO
    getEmail<tipo>(email: string): Observable<tipo[]>{
      const ref =  this.Firestore.collection<tipo>(email);
      return ref.valueChanges();
};
}