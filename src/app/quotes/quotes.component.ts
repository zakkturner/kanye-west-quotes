import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  constructor(private configService: ConfigService) {}
  quote: string = '';

  ngOnInit(): void {}
  showQuote() {
    this.configService
      .getYeQuote()
      .subscribe((data: { quote: string }) => (this.quote = data.quote));
  }
}
