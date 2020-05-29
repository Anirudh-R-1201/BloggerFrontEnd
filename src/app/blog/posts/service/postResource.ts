import {Injectable} from '@angular/core';
import {ApiConfig} from '../../../common/apiConfig';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostDto} from './dataModel/postDTO';
import {CreatePostDto} from './dataModel/createPostDTO';
import {EditPostDto} from './dataModel/editPostDTO';

@Injectable()
export class PostResource {
    private readonly URL = ApiConfig.url + '/posts';

    constructor(private httpClient: HttpClient) {
    }

    public findAll(): Observable<PostDto[]> {
        return this.httpClient.get(this.URL) as Observable<PostDto[]>;
    }

    public create(createPostDto: CreatePostDto): Observable<PostDto> {
        return this.httpClient.post(this.URL, createPostDto) as Observable<PostDto>;
    }

    public edit(editPostDto: EditPostDto): Observable<PostDto> {
        return this.httpClient.put(this.URL, editPostDto) as Observable<PostDto>;
    }

    public delete(postId: number): Observable<any> {
        return this.httpClient.delete(this.URL + '/' + postId);
    }
}