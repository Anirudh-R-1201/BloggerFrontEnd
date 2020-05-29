import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {PostsModule} from './posts/postsModule';
import {ConfirmationDialogComponent} from './dialogue/confirmDialogueComponent';
import {CommonMaterialModules} from '../common/material/commonMaterialModules';
import {RouterModule} from '@angular/router';
import {BlogRouting} from './blogRouting';
import {BlogGuard} from './guards/blogGuard';

@NgModule({
    imports: [
        PostsModule,
        HttpClientModule,
        RouterModule.forChild(BlogRouting),
        CommonMaterialModules,
    ],
    providers: [
        BlogGuard
    ],
    exports: [
        PostsModule,
        CommonMaterialModules
    ],
    declarations: [
        ConfirmationDialogComponent
    ],
    entryComponents: [
        ConfirmationDialogComponent
    ]
})
export class BlogModule {
}