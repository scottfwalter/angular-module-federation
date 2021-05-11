import { loadRemoteModule } from '@angular-architects/module-federation';
import { Compiler, ComponentFactory, ComponentRef } from '@angular/core';
import {
  Component,
  ComponentFactoryResolver,
  Injector,
  Input,
  OnChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { PluginOptions } from './plugin';
@Component({
  selector: 'plugin-proxy',
  template: `  <ng-container #placeHolder></ng-container>  `,
})
export class PluginProxyComponent implements OnChanges {
  @Input() options: PluginOptions;
  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  constructor(
    private injector: Injector,
    private cfr: ComponentFactoryResolver,
    private compiler: Compiler
  ) {}

  // Dynamically Load Individual Componnent
  // async ngOnChanges(): Promise<void> {
  //   this.viewContainer.clear();
  //   const component = await loadRemoteModule(this.options).then(
  //     (m) => m[this.options.componentName]
  //   );
  //   const factory = this.cfr.resolveComponentFactory(component);
  //   this.viewContainer.createComponent(factory, undefined, this.injector);
  // }

  // Dynamically Load Module
  async ngOnChanges(): Promise<void> {
    this.viewContainer.clear();
    const moduleObj = await loadRemoteModule(this.options).then(
      (m) => {
        return m;
      }
    );

    const module = moduleObj[Object.keys(moduleObj)[0]];
    const compiledModule = await this.compiler.compileModuleAndAllComponentsAsync(module);
    const componentFactory = compiledModule.componentFactories[0];
    this.viewContainer.createComponent(componentFactory, undefined, this.injector);
  }
}
