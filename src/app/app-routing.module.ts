import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent} from './article-list/article-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component: ArticleListComponent},
  {path: 'snippets', component: ArticleListComponent},
  {path: 'projects/:url', component: ArticleComponent}, 
  {path: 'snippets/:url', component: ArticleComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
