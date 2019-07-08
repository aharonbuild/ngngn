import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { ParentComponent } from './c1/parent/parent.component';
import { ChildComponent } from './c1/child/child.component';
import { DadyComponent } from './c2/dady/dady.component';
import { SunComponent } from './c2/sun/sun.component';
import { AbbaComponent } from './c3/abba/abba.component';
import { YelledComponent } from './c3/yelled/yelled.component';

@NgModule({
  declarations: [
    AppComponent,
    CompOneComponent,
    ParentComponent,
    ChildComponent,
    DadyComponent,
    SunComponent,
    AbbaComponent,
    YelledComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
