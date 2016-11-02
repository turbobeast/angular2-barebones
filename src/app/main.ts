import 'reflect-metadata'
import 'zone.js'

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app.module'

declare const __PRODUCTION__: boolean;
if (__PRODUCTION__) {
    enableProdMode();
}

const platform = platformBrowserDynamic()
platform.bootstrapModule(AppModule)