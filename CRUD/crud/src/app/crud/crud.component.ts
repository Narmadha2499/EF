import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
@Component({
  selector: 'app-crud',
  imports: [FormsModule,CommonModule, NgIf],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {

  showCreateForm = false; 
    showEditForm = false; 
    selectedEmployeeIndex: number | null = null;
  
    employees = [
      { id: 1, name: 'John Doe', department: 'HR', salary: 50000 },
      { id: 2, name: 'Jane Smith', department: 'IT', salary: 70000 },
      { id: 3, name: 'Alice Johnson', department: 'Finance', salary: 60000 },
      { id: 4, name: 'Bob Brown', department: 'Marketing', salary: 55000 }
    ];
  
    newEmployee = { id: 0, name: '', department: '', salary: 0 };
  
    addNew() {
      this.showCreateForm = true;
      this.showEditForm = false;
    } 
  
    createEmployee() {
      if (this.newEmployee.id && this.newEmployee.name && this.newEmployee.department && this.newEmployee.salary) {
        this.employees.push({ ...this.newEmployee });
        this.newEmployee = { id: 0, name: '', department: '', salary: 0 }; 
        this.showCreateForm = false;
      } else {
        alert("Please fill in all fields!");
      }
    }
  
    editEmployee(index: number) {
      this.selectedEmployeeIndex = index;
      this.newEmployee = { ...this.employees[index] }; 
      this.showEditForm = true;
      this.showCreateForm = false;
    }
  
    updateEmployee() {
      if (this.selectedEmployeeIndex !== null) {
        this.employees[this.selectedEmployeeIndex] = { ...this.newEmployee };
        this.showEditForm = false;
        this.newEmployee = { id: 0, name: '', department: '', salary: 0 }; // Reset form
      }
    }
  
    deleteEmployee(index: number) {
      if (confirm("Are you sure you want to delete this employee?")) {
        this.employees.splice(index, 1);
      }
    }
  
    showList() {
      this.showCreateForm = false;
      this.showEditForm = false;
    }
  }