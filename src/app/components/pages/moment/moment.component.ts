import { Component, OnInit } from '@angular/core';

import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/Moment';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { faTimes,faEdit } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';


@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {

  baseApiUrl = environment.baseApiUrl
  faTimes = faTimes;
  faEdit = faEdit;

 
  moment?:Moment;

  constructor(
    private momentService:MomentService,
    private route:ActivatedRoute,
    private messageService:MessagesService,
    private router:Router
    ) { }

  ngOnInit(): void {

    //id que esta na url
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.momentService.getMomentz(id).subscribe(item => this.moment = item.data)





  }
  
  async removeHandler(id:number){

    await this.momentService.removeMoment(id).subscribe();
    this.messageService.add("Momento excluido com sucesso!!")
    this.router.navigate(['/']);
    
  }

}
