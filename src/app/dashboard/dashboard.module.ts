import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ResuableModuleModule} from '../reusableModules/resuable-module.module';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ResuableModuleModule,
    AgGridModule  ]
})
export class DashboardModule { }
