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
	        this.loadArticles(data);
	   });
	    this.newsService.initVendors().subscribe(data => this.mVendors = data);
    }

    loadArticles(data) {
        this.mArticles = data;
    	console.log("loaded Articles", this.mArticles);
    }


	searchArticles(vendorCode){
		console.log("selected vendor is: " + vendorCode);
		this.newsService.getArticlesByVendorCode(vendorCode).subscribe(data => {
		    this.loadArticles(data);
		});
	}

	onClick(article) {
        // usability should we navigate on click??
	}

}
