import { Component, OnInit } from '@angular/core';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.css'],
})
export class RightBarComponent implements OnInit {
  constructor(private service: ComponentService) {}
  number!: number;
  result!: boolean;
  ngOnInit(): void {
    this.service.input.subscribe((number) => {
      this.number = number;
      this.checkValue();
    });
    this.service.mode.subscribe(() => {
      this.checkValue();
    });
  }
  checkValue() {
    if (this.service.mode.getValue() === 'isPrime') {
      this.result = this.isPrime(this.number);
    }
    if (this.service.mode.getValue() === 'isFibonacci') {
      this.result = this.isFibonacci(this.number);
    }
  }
  isPrime(num: number) {
    for (var i = 2; i <= num / 2; i++) if (num % i === 0) return false;
    return num > 1;
  }
  isFibonacci(num: number) {
    const sq1 = Math.sqrt(5 * (num * num) - 4);
    const sq2 = Math.sqrt(5 * (num * num) + 4);
    if (sq1 === Math.round(sq1) || sq2 === Math.round(sq2)) {
      return num >= 1;
    } else {
      return false;
    }
  }
}
