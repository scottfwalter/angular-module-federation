import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { startsWith } from './router.utils';
import { WrapperComponent } from './wrapper/wrapper.component';

import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  // { path: 'hello', loadChildren: () => import('mfe1/HelloModule').then(m => m.HelloModule) },
  {
    path: 'hello',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'mfe1',
        exposedModule: './HelloModule',
      }).then((m) => m.HelloModule),
  },
  { matcher: startsWith('mfe3'), component: WrapperComponent, data: { importName: 'mfe3', elementName: 'mfe3-element' }},
  // {
  //   path: 'mfe3',
  //   component: WebComponentWrapper,
  //   data: {
  //     remoteEntry: 'http://localhost:4203/remoteEntry.js',
  //     // remoteEntry: 'https://gray-pond-030798810.azurestaticapps.net//remoteEntry.js',
  //     remoteName: 'mfe3',
  //     exposedModule: './web-components',
  //     elementName: 'mfe3-element'
  //   } as WebComponentWrapperOptions
  // },



  { matcher: startsWith('mfe4'), component: WrapperComponent, data: { importName: 'mfe4', elementName: 'mfe4-element' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
