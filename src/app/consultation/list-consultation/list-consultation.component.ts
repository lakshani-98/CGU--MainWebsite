import { Component, OnInit } from '@angular/core';
import { ConsultationService } from 'src/app/services/consultation.service';
import { RequestConsultationComponent } from '../request-consultation/request-consultation.component';

@Component({
  selector: 'app-list-consultation',
  templateUrl: './list-consultation.component.html',
  styleUrls: ['./list-consultation.component.css'],
})
export class ListConsultationComponent implements OnInit {
  listConsultants: any;
  router: any;
  MatDialog: any;
  sessionType:any;
 
  constructor(private consultationService: ConsultationService) {}
  // type = '';
  // OnMatCardClickEvent(clicked_id: string) {
  //   this.type = clicked_id;
  //   console.log(this.type);
  // }

  ngOnInit(): void {
     

    this.consultationService.listConsultants().subscribe((data) => {
      this.listConsultants = data;
      console.log(this.listConsultants);
    });
  }
  
    
  
}
