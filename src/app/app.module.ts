import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BarChartComponent } from './bar-chart.component';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  imports: [BrowserModule, FormsModule, ChartModule],
  declarations: [AppComponent, HelloComponent, BarChartComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
