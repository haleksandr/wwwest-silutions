import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Articles, News } from '../shared/interfaces';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  public news: Articles[] = [];
  public defaultImage: string =
    'https://thumbs.dreamstime.com/b/bitcoin-logo-crypto-currency-computer-money-vector-graphics-to-design-115315174.jpg';
  public isLoader: boolean = true;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.isLoader = true;
    this.appService.getNews().subscribe((response: any) => {
      this.news = response.articles;
      this.isLoader = false;
    });
  }
}
