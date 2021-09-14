import { Component, OnInit } from '@angular/core';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css'],
})
export class LeftBarComponent implements OnInit {
  constructor(private service: ComponentService) {}
  number!: any;
  timeout!: any;
  ngOnInit(): void {}
  onSearchChange(event: number): void {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if (Math.sign(event) === -1) {
        this.number = 1;
      } else {
        this.number = Math.round(event);
        this.service.input.next(this.number);
      }
    }, 1000);
  }
}
