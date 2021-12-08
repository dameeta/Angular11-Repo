import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-create',
  templateUrl: './emp-create.component.html',
  styleUrls: ['./emp-create.component.css']
})
export class EmpCreateComponent implements OnInit {
  data: Employee ;

  constructor(public apiService: ApiService,
    public router: Router){

      this.data=new Employee();
    } 
      
    ngOnInit(): void {
    }
  
  submitForm(): void {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['list']);
    });

  }

}