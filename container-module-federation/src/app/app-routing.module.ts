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
  {
    matcher: startsWith('app2'),
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      remoteName: 'app2',
      exposedModule: './web-components',
      elementName: 'app2-element'
    } as WebComponentWrapperOptions
  },
  { matcher: startsWith('app3'), component: WrapperComponent, data: { importName: 'app3', elementName: 'app3-element' }},
    {
      path: 'app4',
      component: WebComponentWrapper,
      data: {
        remoteEntry: 'http://localhost:4501/remoteEntry.js',
        remoteName: 'react',
        exposedModule: './web-components',
        elementName: 'react-element'
      } as WebComponentWrapperOptions
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
