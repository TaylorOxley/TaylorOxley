import { Component } from '@angular/router ';
HttpClientModule

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  items = [
    { label: 'Item 1', value: 10 },
    { label: 'Item 2', value: 20 },
    { label: 'Item 3', value: 30 },
    { label: 'Item 4', value: 40 },
    { label: 'Item 5', value: 50 }
  ];
}
