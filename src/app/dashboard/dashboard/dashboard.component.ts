import { Component } from '@angular/core';
import { ColDef, GetRowIdFunc, GetRowIdParams } from 'ag-grid-community';
import { LinkRendererComponent } from '../../reusableModules/link-renderer/link-renderer.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public columnDefs: ColDef[] = [
    {
      headerName: 'make',
      field: 'make',
      cellRenderer: LinkRendererComponent
    },
    { field: 'model' },
    { field: 'price' },
  ];
  public rowData: any[] | null = [
    { id: 'c1', make: 'Toyota', model: 'Celica', price: 35000 },
    { id: 'c2', make: 'Ford', model: 'Mondeo', price: 32000 },
    { id: 'c8', make: 'Porsche', model: 'Boxster', price: 72000 },
    { id: 'c4', make: 'BMW', model: 'M50', price: 60000 },
    { id: 'c14', make: 'Aston Martin', model: 'DBX', price: 190000 },
  ];
}

  // methodFromParent(cell: any) {
  //   alert('Parent Component Method from ' + cell + '!');
  // }
//}
