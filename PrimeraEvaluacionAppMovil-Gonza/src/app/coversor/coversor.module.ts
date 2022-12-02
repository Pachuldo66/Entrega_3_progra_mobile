import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoversorPageRoutingModule } from './coversor-routing.module';

import { CoversorPage } from './coversor.page';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoversorPageRoutingModule
  ],
  declarations: [CoversorPage, HeaderComponent]
})
export class CoversorPageModule {}
