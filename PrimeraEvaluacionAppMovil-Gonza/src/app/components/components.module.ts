import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../components/menu/menu.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
