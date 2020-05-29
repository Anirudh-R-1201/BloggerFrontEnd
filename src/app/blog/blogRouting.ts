import {Route} from '@angular/router';
import {PostListComponent} from './posts/list/postListComponent';
import {BlogGuard} from './guards/blogGuard';

export const BlogRouting: Route[] = [
    {
        path: 'blog', children: [
            {path: 'list', component: PostListComponent, canActivate: [BlogGuard]}
        ]
    }
];