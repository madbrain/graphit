import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditorComponent } from './editor/editor.component';
import { SaveStateFormatterPipe } from './save-state-formatter.pipe';
import { BytesPipe } from './bytes.pipe';
import { GraphCanvasComponent } from './graph-canvas/graph-canvas.component';
import { AboutModalComponent } from './about-modal/about-modal.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  { path: 'edit',      component: EditorComponent },
  { path: 'edit/:id?', component: EditorComponent },
  { path: '',
    redirectTo: '/edit/',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EditorComponent,
    SaveStateFormatterPipe,
    BytesPipe,
    GraphCanvasComponent,
    AboutModalComponent,
    InlineEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    HttpModule
  ],
  entryComponents: [
    AboutModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
