import { Component, OnInit } from '@angular/core';
import { RouterModule, Router} from '@angular/router';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  doctorStatus = 'Not entered';
  agentStatus = 'Not entered';


  // constructor(private _router: Router) { }
  // onDoctorButtonClick(): void {
  //   this._router.navigate(['/enterdoctor'])
  // }


  ngOnInit(): void {
  }
  onCreateDoctor() {
    this.doctorStatus = 'Entered';
  }
  onCreateAgent() {
    this.agentStatus = 'Entered';
  }

}
