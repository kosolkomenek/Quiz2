import { Component, OnInit } from '@angular/core';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-middle-bar',
  templateUrl: './middle-bar.component.html',
  styleUrls: ['./middle-bar.component.css'],
})
export class MiddleBarComponent implements OnInit {
  constructor(private service: ComponentService) {}

  ngOnInit(): void {
    this.service.mode.next('isPrime');
  }
  changeMode() {
    const element = document.getElementById('mode') as HTMLSelectElement;
    const index = element.selectedIndex; // no error
    var value = element.options[index].value;
    this.service.mode.next(value);
  }
}
