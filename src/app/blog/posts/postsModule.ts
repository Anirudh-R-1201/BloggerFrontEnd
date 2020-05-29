import {NgModule} from '@angular/core';
import {PostListModule} from './list/postListModule';
import {PostService} from './service/postService';
import {PostResource} from './service/postResource';
import {CreatePostDialogComponent} from './dialogue/createPostDialogueComponent';
import {CommonMaterialModules} from '../../common/material/commonMaterialModules';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        PostListModule,
        FormsModule,
        CommonModule,
        CommonMaterialModules
    ],
    exports: [
        PostListModule
    ],
    declarations: [
        CreatePostDialogComponent
    ],
    entryComponents: [
        CreatePostDialogComponent
    ],
    providers: [
        PostService,
        PostResource
    ],
})
export class PostsModule {
}