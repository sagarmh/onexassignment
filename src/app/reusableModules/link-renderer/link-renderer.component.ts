import {Component} from "@angular/core";
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from "ag-grid-community";

@Component({
  selector: 'app-link-renderer',
  template: `
             <a href="javascript:void()" (click)="buttonClicked()">{{valueCubed()}}</a>`
})
export class LinkRendererComponent {
  public cellValue!: string;

   // gets called once before the renderer is used
   agInit(params: ICellRendererParams): void {
       this.cellValue = this.getValueToDisplay(params);
   }

   

   // gets called whenever the cell refreshes
   refresh(params: ICellRendererParams): boolean {
       // set value into cell again
       this.cellValue = this.getValueToDisplay(params);
       return true;
   }
   public valueCubed(): string {
    return this.cellValue;
  }

   buttonClicked() {
       alert(`${this.cellValue} medals won!`)

      //  this.cellValue..context.componentParent.methodFromParent(
      //   `RowData: ${this.cellValue}`
      // );
   }

   getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }
  
}
