import { DomSanitizer , SafeResourceUrl } from '@angular/platform-browser';
import { Deserializable } from './deserializable.model';

export class Result {
    Title: string;
    videoId : string;
    safeURL : SafeResourceUrl;
    _sanitizer : DomSanitizer;

      setSafeURL(){
        console.log("Set safeurl called for " + this.Title);
        this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/watch?v=" + this.videoId);
      }

      videourl(){
          return this.safeURL;
      }
}