import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { PluginProxyComponent } from './plugins/plugin-proxy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PluginProxyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private router: Router) {
    console.log('APPMODULE CONTS', this.router);

    this.router.config.push({
        path: 'goodbye',
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            remoteName: 'mfe1',
            exposedModule: './HelloModule',
          }).then((m) => m.HelloModule),
    })
  }
}
