import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { JurosCompostosComponent } from './juros-compostos/juros-compostos.component';
import { JurosSimplesComponent } from './juros-simples/juros-simples.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    JurosCompostosComponent,
    JurosSimplesComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
