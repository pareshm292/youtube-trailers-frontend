import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';
import { FormControl } from '@angular/forms';
import { DomSanitizer , SafeResourceUrl } from '@angular/platform-browser';

import { debounceTime, map } from 'rxjs/operators/';
import { Result } from '../model/result';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  results: Result[] = [];
  queryField: FormControl = new FormControl();
 // public safeURL : SafeResourceUrl;

  constructor(private _searchService: SearchService , private _sanitizer : DomSanitizer) { }

  ngOnInit() {
    this.queryField.valueChanges.pipe(
      debounceTime(1000))
      .subscribe(queryField => this._searchService.search(queryField)
                              .subscribe(response => {
                                this.results = response.json() as Result[]
                               this.results.forEach(result => result.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/watch?v=" + result.videoId));
                              }))

   // this.results.forEach(result => result.setSafeURL);

  }
  



}
