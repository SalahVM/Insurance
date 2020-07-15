import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  PatientID = '';
  PatientName = '';
  PatientAge = '';
  IDcreationstatus = '';
  Namecreationstatus = '';
  Agecreationstatus = '';

  constructor() { }

  ngOnInit(): void {
  }
  
  oncreateID(){

    this.IDcreationstatus = 'ID: '+this.PatientID;
    this.Namecreationstatus = 'Name: '+this.PatientName;
    this.Agecreationstatus = 'Name: '+this.PatientAge;
  }
}
