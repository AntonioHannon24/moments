import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/Moment';
import { environment } from 'src/environments/environment';
import { faSearch, faServer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allMoment:Moment[] = []
  moments:Moment[] = []
  baseApiUrl = environment.baseApiUrl

  ///todo search

  faSearch = faSearch;
  searchTerm:string = '';

  constructor(private momentService:MomentService) { }

  ngOnInit(): void {
    this.momentService.getMoment().subscribe((items)=>{
      const data = items.data
      data.map((items)=>{
        items.created_at = new Date(items.created_at!).toLocaleDateString('pt-BR')
      })
      this.allMoment = data;
      this.moments = data;
    })
  }

  search(evento:Event):void{

    const target = evento.target as HTMLInputElement
    const value = target.value

    this.moments = this.allMoment.filter(moment =>{
      return moment.title.toLowerCase().includes(value)
  });


  }

}
