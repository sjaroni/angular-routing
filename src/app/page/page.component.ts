import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page',
  imports: [],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent {
  pageId = input.required<string>();
  limit = input.required<string>();
  page = input.required<{pageId: string; name: string}>();
}
