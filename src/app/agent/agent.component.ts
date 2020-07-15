import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})


export class AgentComponent implements OnInit {
  InsuranceID = '';
  InsuranceID1 = '1234';
  IDenterstatus ='';
  name = '';
  age = '';
  AnnualIncome = '';
  nameout = 'Salah';
  ageout = '22';
  incomeout = '1 Lakh';
  status = 'false';
  yesstatus = 'false';
  nostatus = 'fasle';
  approveout = '';
  declineout = '';

  constructor() { }

  ngOnInit(): void {
  }
  onenterID() {
    // this.IDenterstatus = 'ID is' + this.InsuranceID;
    if ( this.InsuranceID == this.InsuranceID1)
    {
      this.status = 'true';
      this.IDenterstatus = 'ID is' + this.InsuranceID;
      this.name = 'Name:'+ this.nameout;
      this.age = 'Age:'+ this.ageout;
      this.AnnualIncome = 'Annual Income:'+ this.incomeout;
     
    }
    else
    {
      this.IDenterstatus = 'Invalid ID';
      

    }

  }
  approveclick() {
    this.yesstatus= 'true';
    this.approveout= 'Approved';

  }
  declineclick() {
    this.nostatus= 'true';
    this.approveout= 'Declined';
  }

}
