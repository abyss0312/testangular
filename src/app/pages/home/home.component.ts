import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { CategoryModel } from 'src/app/models';
import { CategoryService } from 'src/app/service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories:CategoryModel[] = [];

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
   this.categoryService.getCategories().subscribe(res => this.categories = res.data);
  }

}
