  import {Component, OnInit, ViewChild} from '@angular/core';
  import {MatTableDataSource, MatTableModule} from "@angular/material/table";
  import {MatToolbar} from "@angular/material/toolbar";
  import {MatFormField} from "@angular/material/form-field";
  import {MatPaginator} from "@angular/material/paginator";
  import {MatInput} from "@angular/material/input";
  import {FisiosServicesService} from "../../services/fisios-services.service";
  import {Router} from "@angular/router";
  import {MatLabel} from "@angular/material/form-field";
  import {HttpClientModule} from "@angular/common/http";

  @Component({
    selector: 'app-fisios-table',
    standalone: true,
    imports: [
      MatTableModule,
      MatToolbar,
      MatFormField,
      MatPaginator,
      MatInput,
      MatLabel,
      HttpClientModule
    ],
    templateUrl: './fisios-table.component.html',
    styleUrl: './fisios-table.component.css'
  })
  export class FisiosTableComponent implements OnInit {
      displayedColumns: string[]=['nombre','imagen','biografia','edad','horarios'];
      data: any[]=[];
      dataSource= new MatTableDataSource<any>(this.data);

      @ViewChild(MatPaginator,{static: true}) paginator!: MatPaginator;

      fisios=[];

      constructor(private fisiosServices: FisiosServicesService, private router: Router) {

      }

      ngOnInit() {
          this.getFisios();
      }

    getFisios() {
      for (let i = 0; i < 10; i++) {
        this.fisiosServices.getFisios(i).subscribe(
          (res) => {
            this.dataSource.data = res;
            this.dataSource.paginator = this.paginator;
          },
          (error) => {
            console.log(error);
          }
        );
      }
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
        this.router.navigateByUrl(`/fisio/${row.name}`);
      }

  }
