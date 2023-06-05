import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-link-renderer',
  templateUrl: './link-renderer.component.html',
  styleUrls: ['./link-renderer.component.css'],
})
export class LinkRendererComponent implements ICellRendererAngularComp {
  public params!: ICellRendererParams;
  public cellValue!: string;

  selected = '';

  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.cellValue = this.getValueToDisplay(params);
    this.params = params;
  }

  public buttonClicked() {
    this.params.context.componentParent.methodFromParent(
      (this.selected = this.params.node.data)
    );
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }

  refresh(): boolean {
    return false;
  }
}
