import { AfterViewInit, Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { APP_VERSION } from './app.version'

declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  appName = APP_VERSION;
  ngVersion = VERSION;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigateByUrl(location.pathname.substr(1));
    window.addEventListener('popstate', () => {
      this.router.navigateByUrl(location.pathname.substr(1));
    });
  }
}
