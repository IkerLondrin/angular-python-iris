// external modules
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule} from '@angular/router';
import 'hammerjs';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
PlotlyModule.plotlyjs = PlotlyJS;
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

// own modules and components
import {AppComponent} from './app.component';
import {SharedModule} from './components/shared/shared.module';
import {ROUTES} from './app.routes';
import {HomeComponent} from './components/pages/home/home.component';
import {IrisService} from './services/iris.service';
import { SelectorModeloComponent } from './components/selector-modelo/selector-modelo.component';
import { PrecisionComponent } from './components/precision-modelo/precision.component';
import { SelectorVariablesComponent } from './components/selector-variables/selector-variables.component';
import { PredictionsComponent } from './components/charts/predictions/predictions.component';
import { EstadisticasComponent } from './components/pages/estadisticas/estadisticas.component';
import { VisualizacionComponent } from './components/charts/visualizacion/visualizacion.component';
import { SpinnerComponent } from './components/utils/spinner/spinner.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SelectorModeloComponent,
        PrecisionComponent,
        SelectorVariablesComponent,
        PredictionsComponent,
        EstadisticasComponent,
        VisualizacionComponent,
        SpinnerComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        RouterModule.forRoot(ROUTES, {useHash: false, preloadingStrategy: PreloadAllModules}),
        SharedModule,
        PlotlyModule
    ],
    providers: [IrisService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
