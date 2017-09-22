import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dignosisResult:string="";
  userName:string="Enter Your Twitter Username";
  title = 'TweePression';

  responseMap:any  = {"-1": "You’re really tricky! We couldn’t find that Twitter Handle!",
                      "-2": "TweePression is unavailable at this time. Please try again later.",
                      "-3": "Come back another time! TweePression is undecided due to a low number of tweets. Happy Tweeting!",
                      "-4": "TweePression is unavailable at this time. Please try again later.",
                      "-5": "Come back another time! TweePression is undecided due to non-availability of any tweets. Happy Tweeting!",
                      "-6": "Twitter Handle could not be blank. Please enter a valid Twitter Handle.",
                      "0": "TweePression recommends that you seek medical help from your primary doctor about clinical depression treatment.",
                      "1": "You’re one healthy Tweeter! Keep up the good work!"};

  constructor(private http: HttpClient) {

  }

escape = function (str) {
    // TODO: escape %x75 4HEXDIG ?? chars
    return str
      .replace(/[\"]/g, '')
      .replace(/[\n]/g, '')
    ; };

  getDiagnosis = ()=> {
    this.http.get('http://34.198.180.239/appScriptWeb.py?twitter_handle='+this.userName).subscribe(data => {
console.log(data);

       var dd= data['result'];
       this.dignosisResult =  this.responseMap[dd];
    });


  }
}
