import {NgModule} from '@angular/core';
import { PostService } from './service/postService';
import { PostResource } from './service/postResource';
import { PostListModule } from './list/postListModule';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [PostListModule,HttpClientModule],
    exports: [PostListModule,HttpClientModule],
    declarations: [],
    providers: [PostService, PostResource]
})

export class BlogModule{

}
