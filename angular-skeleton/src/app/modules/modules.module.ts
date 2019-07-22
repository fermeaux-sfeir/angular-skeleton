import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { NavigationModule } from './navigation/navigation.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ModulesRoutingModule, NavigationModule, HomeModule]
})
export class ModulesModule {}
