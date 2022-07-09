import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {

  btnText = "Compartilhar!";

  constructor(private router:Router,private momentService: MomentService,private messageService:MessagesService) { }

  ngOnInit(): void {
  }

 async createHandle(moment:Moment){

    const formData = new FormData();

    formData.append("title",moment.title)
    formData.append("description",moment.description)
    if(moment.image){
      formData.append("image",moment.image)
    }
    // todo

    //enviar para o service

    await this.momentService.createMoment(formData).subscribe();

    //exibir mensagem

    this.messageService.add("Momento Adicionado Com Sucesso!!")

    //redirect
    this.router.navigate(['/']);



  }

}
