import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { MealsService } from '../meals.service';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { log } from 'console';
@Component({
  selector: 'app-categorymeals',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './categorymeals.component.html',
  styleUrl: './categorymeals.component.scss',
})
export class CategorymealsComponent implements OnInit {
  constructor(
    private readonly mealsService: MealsService,
    private activatedRoute: ActivatedRoute
  ) {}
  categories: any;
  meals: any;
  getCategories(): void {
    this.mealsService.getCategories().subscribe({
      next: (res) => {
        this.categories = res.meals;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getMeals(cat: string): void {
    this.mealsService.getMeals(cat).subscribe({
      next: (res) => {
        this.meals = res.meals;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnInit() {
    this.getCategories();
    this.activatedRoute.paramMap.subscribe((res) => {
      const categoryName = res.get('categoryName');
      if (categoryName) this.getMeals(categoryName);
      else console.log('Error');
    });
  }
}
