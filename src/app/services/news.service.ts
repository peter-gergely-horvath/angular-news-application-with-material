import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Observable, of } from 'rxjs';

import { NewsItem } from '../model/news-item';
import { Vendor } from '../model/vendor.model';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

    constructor(private http:HttpClient) { }

    hardCodedVendors: Vendor[] = [
        new Vendor('aws', 'Amazon Web Services'),
        new Vendor('msazure', 'Microsoft Azure'),
        new Vendor('gcp', 'Google Cloud Platform'),
        new Vendor('oc', 'Oracle Cloud'),
    ]


    initVendors() {
        return of(this.hardCodedVendors)
    }

    initArticles() {
        return this.http.get('http://data.cloudoverload.com/news/aws/news.json')
            .pipe(map(data => data['entries']))
    }

    getArticlesByVendorCode(vendor: String){
           return this.http.get('http://data.cloudoverload.com/news/'+vendor+'/news.json')
            .pipe(map(data => data['entries']))
    }
}
