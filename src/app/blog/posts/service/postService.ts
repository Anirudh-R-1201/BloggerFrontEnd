import {Injectable} from '@angular/core';
import { PostListItem } from './dataModel/postModel';
import { Observable } from 'rxjs';
import { PostResource } from './postResource';

@Injectable()
export class PostService {
    constructor(private postResource: PostResource){}

    public getAllPostItem(): Observable<PostListItem[]> {
        return this.postResource.findAll();
    }
}