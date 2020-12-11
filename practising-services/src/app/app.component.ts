import { Component } from '@angular/core';
import{BlogDataService} from './blog-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '5C INF LEZIONE POMERIDIANA';
    posts=[];
     /*[
      {"id":1,"title":"Introduzione a json-server","author":"Oscar"},
  
      {"id":2,"title":"Filosofia della didattica","author":"Cortese" },
  
      {"id":3,"title":"Sicurezza delle rete","author":"Piovano" },
  
      {"id":4,"title":"Le direttive in Angular","author":"Oscar" },
  
      {"id":5,"title":"Configurare un gateway","author":"Piovano" }
  
    ];*/
    /*comments= [
      {"id":1,"body":"Non mi è chiara la parte della ngIf","postId":4},
  
      {"id":2,"body":"Bella lezione, Preside!","postId":2},
  
      {"id":3,"body":"Ci sono degli esercizi?","postId":4}
  
    ];
  
    authors= [

      {"name":"Oscar"},
  
      {"name":"Cortese"},
  
      {"name":"Piovano"}
    ]*/
  constructor(blogDataService: BlogDataService){
    blogDataService.getPosts().subscribe((data: any) => this.posts = data);
  }
}
