import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  router = inject(Router);
  
  goToProductsPage():void {
    // this.router.navigateByUrl('/products'); // ohne Parameter
    // this.router.navigate(['products']); // das selbe wie navigateByUrl
    this.router.navigate(['products','title',33, 'foo']); // navigate erlaubt mehrere Parameter
  }
}
