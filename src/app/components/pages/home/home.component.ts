import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/Moment';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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

}
