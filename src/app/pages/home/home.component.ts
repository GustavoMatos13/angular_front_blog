  import { Component, OnInit } from '@angular/core';
  import { BlogService } from 'src/app/core/services/blog.service';

  @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
  })
  export class HomeComponent implements OnInit {
    constructor(private servicoBlog: BlogService) {
      
    }
    
      ngOnInit(): void {
        this.servicoBlog.listar().subscribe(
            resposta => {
              console.log(resposta)
            }
          )
      }

  }
