import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { ArticlesPreviewComponent } from './articles/articles-preview/articles-preview.component';
import { ArticlesFormComponent } from './articles/articles-form/articles-form.component';
import { AuthorsListComponent } from './authors/authors-list/authors-list.component';
import { AuthorsDetailsComponent } from './authors/authors-details/authors-details.component';
import { AuthorsFormComponent } from './authors/authors-form/authors-form.component';
import { MainComponent } from './main/main.component';
import { AuthorsService } from './authors.service';

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'authors', component: AuthorsListComponent},
  { path: 'author/:id', component: AuthorsDetailsComponent},
  { path: 'articles', component: ArticlesListComponent},
  { path: 'article/:id', component: ArticlesPreviewComponent},
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  // { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    ArticlesPreviewComponent,
    ArticlesFormComponent,
    AuthorsListComponent,
    AuthorsDetailsComponent,
    AuthorsFormComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
