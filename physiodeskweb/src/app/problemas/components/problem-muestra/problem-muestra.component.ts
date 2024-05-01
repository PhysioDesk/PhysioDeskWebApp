import {Component, ViewChild} from '@angular/core';
import {MatAnchor} from "@angular/material/button";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatPaginator} from "@angular/material/paginator";
import {NgForm} from "@angular/forms";
import {ProblemModel} from "../../model/Problem";
import {ProblemsService} from "../../services/problems.service";

@Component({
  selector: 'app-problem-muestra',
  standalone: true,
  imports: [
    MatAnchor,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatPaginator,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef
  ],
  templateUrl: './problem-muestra.component.html',
  styleUrl: './problem-muestra.component.css'
})
export class ProblemMuestraComponent {
  @ViewChild('problemsForm', {static: false})
  problemsForm !: NgForm;
  problemData !: ProblemModel;
  isEditMode = false;

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name'];

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
