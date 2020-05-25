import {NgModule} from '@angular/core';
import { PostService } from './service/postService';
import { PostResource } from './service/postResource';
import { PostListModule } from './list/postListModule';

@NgModule({
    imports: [PostListModule],
    exports: [PostListModule],
    declarations: [],
    providers: [PostService, PostResource]
})

export class BlogModule{

}
