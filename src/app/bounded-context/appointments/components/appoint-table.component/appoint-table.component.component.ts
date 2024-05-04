import {Component, OnInit, ViewChild} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {FisiosServicesService} from "../../../fisioterapeutas/services/fisios-services.service";
import {Router} from "@angular/router";
import {GrabacionService} from "../../grabacion.service";

@Component({
  selector: 'app-appoint-table.component',
  standalone: true,
  imports: [
    MatHeaderCell,
    MatCell,
    MatColumnDef,
    MatTable,
    MatHeaderCellDef,
    MatCellDef
  ],
  templateUrl: './appoint-table.component.component.html',
  styleUrl: './appoint-table.component.component.css'
})
export class AppointTableComponentComponent implements OnInit {
  displayedColumns: string[]=['id','date','name','duration','access'];
  data: any[]=[];
  dataSource= new MatTableDataSource<any>(this.data);

  @ViewChild(MatPaginator,{static: true}) paginator!: MatPaginator;

  grabaciones=[];

  constructor(private grabacionService: GrabacionService, private router: Router) {

  }

  ngOnInit() {
    this.getGrabaciones();
  }

  getGrabaciones() {

    this.grabacionService.getGrabaciones().subscribe(
      (res) => {
        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
      }
    );

  }
  applyFilter(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const filteredValue = inputElement.value.replace(/[^a-zA-Z ]/g, '');//Remueve caracteres no deseados
    inputElement.value = filteredValue;
    this.dataSource.filter = filteredValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }

  getRow(row: any){
    this.router.navigateByUrl(`/fisios/${row.id}`);
  }

}
