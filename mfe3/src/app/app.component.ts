import { AfterViewInit, Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';

declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'mfe3';

  // ngVersion = require('../../package.json').dependencies['@angular/core'];
  ngVersion = VERSION.full;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('RRRRRRRRRRRRRRRRRRRRRRRRR', VERSION);
    this.router.navigateByUrl(location.pathname.substr(1));
    window.addEventListener('popstate', () => {
      this.router.navigateByUrl(location.pathname.substr(1));
    });
  }

}
