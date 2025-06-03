import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-structural-directive-ngfor-vs-fo',
  imports: [],
  templateUrl: './structural-directive-ngfor-vs-fo.html',
  styleUrl: './structural-directive-ngfor-vs-fo.scss',
})
export class StructuralDirectiveNgforVsFo {
  employees: any[] = [
    {
      empName: 'John',
      empNumber: 101,
      empEmail: 'john@gmail.com',
      empDept: 'IT',
    },
    {
      empName: 'Bob',
      empNumber: 102,
      empEmail: 'bob@gmail.com',
      empDept: 'HR',
    },
    {
      empName: 'Peter',
      empNumber: 103,
      empEmail: 'peter@gmail.com',
      empDept: 'QA',
    },
  ];

  companyList: string[] = ['Atos', 'Mercedes', 'IBM', 'Microsoft'];
}
