import { ComponentsModule } from './../../components/components.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  //HomeComponent deve ser importado em declarations do HomeModule
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, RouterModule, ComponentsModule],
})
export class HomeModule {}
