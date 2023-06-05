import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { LinkRendererComponent } from './link-renderer/link-renderer.component';


@NgModule({
  declarations: [
    LinkRendererComponent,
    DialogBoxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ResuableModuleModule { }
