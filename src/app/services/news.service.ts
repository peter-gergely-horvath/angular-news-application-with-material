import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Observable, of } from 'rxjs';
import { from } 'rxjs/observable/from'

import { NewsItem } from '../model/news-item';
import { Vendor } from '../model/vendor.model';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

    constructor(private http:HttpClient) { }

    hardCodedVendors: Vendor[] = [
        new Vendor('aws', 'Amazon Web Services'),
        new Vendor('msazure', 'Microsoft Azure')
    ]


    initVendors() {
        return of(this.hardCodedVendors)
    }

    initArticles() {
        return this.http.get('http://data.cloudoverload.com/aws/internet-news.json')
            .pipe(map(data => data['entries']))
    }

    getArticlesByID(vendor: String){
           return this.http.get('http://data.cloudoverload.com/'+vendor+'/internet-news.json')
            .pipe(map(data => data['entries']))
    }
}
