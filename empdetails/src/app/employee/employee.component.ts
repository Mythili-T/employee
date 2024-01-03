import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employeeDetails:any=[
    {
      empId:"1",
      empName:"Mythili T",
      designation:"Front end Developer",
      dateOfBirth:"12/10/2001",
      address:"Edapaddi",
      salary:"20000"
    },
    {
      empId:"2",
      empName:"Yalini P",
      designation:"Tester",
      dateOfBirth:"18/11/2001",
      address:"Salem",
      salary:"60000"
    },
    {
      empId:"3",
      empName:"Nithin",
      designation:"TL",
      dateOfBirth:"15/02/2012",
      address:"Salem",
      salary:"60000"
    },
    {
      empId:"4",
      empName:"Logeshwari",
      designation:"SL",
      dateOfBirth:"12/06/1999",
      address:"Salem",
      salary:"45000"
    },
    {
      empId:"5",
      empName:"Santhosh kumar V",
      designation:"TL",
      dateOfBirth:"16/07/2003",
      address:"Erode",
      salary:"82000"
    },
    {
      empId:"6",
      empName:"Manikandan",
      designation:"Developer",
      dateOfBirth:"05/10/2001",
      address:"Salem",
      salary:"50000"
    },
    {
      empId:"7",
      empName:"Ravi kumar V",
      designation:"Back end Developer",
      dateOfBirth:"15/07/2001",
      address:"Nellai",
      salary:"60000"
    },
    {
      empId:"8",
      empName:"Dhiviya",
      designation:"DS",
      dateOfBirth:"15/8/2001",
      address:"Salem",
      salary:"30000"
    },
    {
      empId:"9",
      empName:"Hari",
      designation:"TL",
      dateOfBirth:"02/10/2001",
      address:"Erode",
      salary:"30000"
    },
    {
      empId:"10",
      empName:"Arun",
      designation:"Software engineer",
      dateOfBirth:"11/8/2002",
      address:"Chennai",
      salary:"90000"
    },
  ]
  Id:boolean=true;
  Salary:boolean=true;
  HideEmployeeId(){
    this.Id=false
  }
  HideEmployeeSalary(){
    this.Salary=false
  }
}

