import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';

import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	mArticles:Array<any>;
	mVendors:Array<any>;

	constructor(
	    private newsService: NewsService){
		console.log('app component constructor called');
	}

	ngOnInit() {
        //load articles
	    this.newsService.initArticles().subscribe(data => {
	        this.mArticles = data
	        console.log("loaded Articles", this.mArticles);
	    });
	    this.newsService.initVendors().subscribe(data => this.mVendors = data);
    }

	searchArticles(source){
		console.log("selected source is: "+source);
		this.newsService.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
	}

	onClick(article) {

	}

}
