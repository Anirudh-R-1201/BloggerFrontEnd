import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PostDto} from './dataModel/postDTO';
import {PostResource} from './postResource';
import {CreatePostDto} from './dataModel/createPostDTO';
import {EditPostDto} from './dataModel/editPostDTO';

@Injectable()
export class PostService {

    constructor(private postResource: PostResource) {
    }

    public getAllPostItems(): Observable<PostDto[]> {
        return this.postResource.findAll();
    }

    public createPost(createPostDto: CreatePostDto): Observable<PostDto> {
        return this.postResource.create(createPostDto);
    }

    public editPost(editPostDto: EditPostDto): Observable<PostDto> {
        return this.postResource.edit(editPostDto);
    }

    public deletePost(postId: number): Observable<void> {
        return this.postResource.delete(postId);
    }
}