import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CopyIconComponent } from './icons/copy-icon/copy-icon.component';
import { RegenerateIconComponent } from './icons/regenerate-icon/regenerate-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    CopyIconComponent,
    RegenerateIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
