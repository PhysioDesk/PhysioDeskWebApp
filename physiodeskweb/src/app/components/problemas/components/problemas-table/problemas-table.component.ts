import {Component, OnInit, ViewChild} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule, NgForm} from "@angular/forms";
import {MatAnchor, MatButton} from "@angular/material/button";
import {ProblemModel} from "../../model/Problem";
import { MatIconModule } from "@angular/material/icon";

import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource,
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {ProblemsService} from "../../services/problems.service";

@Component({
  selector: 'app-problemas-table',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    FormsModule,
    MatButton,
    MatTable,
    MatHeaderCell,
    MatColumnDef,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatAnchor,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatPaginator,
    MatIconModule
  ],
  templateUrl: './problemas-table.component.html',
  styleUrl: './problemas-table.component.css'
})
export class ProblemasTableComponent implements OnInit {
    @ViewChild('problemForm', {static: false})
    problemsForm !: NgForm;
    problemData !: ProblemModel;
    isEditMode = false;

    dataSource = new MatTableDataSource();
    displayedColumns: string[] = ['id', 'name', 'actions'];

    @ViewChild(MatPaginator, {static: true})
    paginator !: MatPaginator;

    constructor(private problemsService: ProblemsService) {
        this.problemData = {} as ProblemModel;
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.getAllProblems();
    }

  getAllProblems() {

    this.problemsService.getList().subscribe(
      (response:any) => {
        this.dataSource.data = response;
      },
      (error) => {
        console.log(error);
      }
    );

  }
  onSubmit(){
    if(this.problemsForm.form.valid){
      if(this.isEditMode){
        this.updateProblem();
      } else{
        this.addProblem();
      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }
  }
    addProblem() {
      let maxID: number=0;
      maxID=this.dataSource.data.reduce((max:number,problem:any)=>
        problem.id > max ? problem.id : max,0);
        this.problemData.id=(Number(maxID)+1).toString();
        this.problemsService.createItem(this.problemData).subscribe((response:any)=>{
          this.dataSource.data.push({...response});
          this.dataSource.data = this.dataSource.data.map(o => Object.assign({}, o));
        });
    }

    updateProblem() {
      this.problemsService.updateItem(this.problemData.id, this.problemData).subscribe((response: any) => {
        this.dataSource.data = this.dataSource.data.map((o: any) => {
          if (o.id == response.id) {
            o = response;
          }
          return o;
        });
      });
    }

    cancelEdit() {
    this.isEditMode = false;
    this.problemsForm.resetForm();
   }



    editItem(element: any){
      this.problemData = element;
      this.isEditMode = true;
    }

    deleteItem(id:string){
      this.problemsService.deleteItem(id).subscribe(() => {
        this.dataSource.data = this.dataSource.data.filter((o: any) => {
          return o.id !== id;
        });
      });
      alert("Problema eliminado con éxito");
    }


}
