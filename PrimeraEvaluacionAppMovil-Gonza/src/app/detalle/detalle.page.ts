import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  usuario : any = null;
  pageTitle : string = '';
  headertitle = 'Detalle';
  isNotLogin = true;

  constructor(private activatedRoute: ActivatedRoute,
              ) { 
    this.obtenerUsuario();
  }

  ngOnInit() {
    console.log(this.usuario);
    this.pageTitle = this.usuario.name;
  }

  obtenerUsuario():void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.usuario = JSON.parse(params.usuario);
    })
  }

}
