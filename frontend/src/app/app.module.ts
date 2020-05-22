// external modules
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule} from '@angular/router';
import 'hammerjs';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
// own modules and components
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {ROUTES} from './app.routes';
import {HomeComponent} from './pages/home/home.component';
import {IrisService} from './services/iris.service';
import { SelectorModeloComponent } from './components/selector-modelo/selector-modelo.component';
import { PrecisionComponent } from './components/precision-modelo/precision.component';
import { SelectorVariablesComponent } from './components/selector-variables/selector-variables.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SelectorModeloComponent,
        PrecisionComponent,
        SelectorVariablesComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule.forRoot(ROUTES, {useHash: false, preloadingStrategy: PreloadAllModules}),
        SharedModule
    ],
    providers: [IrisService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
