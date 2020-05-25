import {Injectable} from '@angular/core';
import  {ApiConfig} from '../apiConfig';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PostListItem} from './dataModel/postModel';

@Injectable()
export class PostResource {
    private readonly URL = ApiConfig.url + '/posts';

    constructor(private httpClient: HttpClient){

    }

    public findAll(): Observable<PostListItem[]>{
        return this.httpClient.get(this.URL) as Observable<PostListItem[]>;
    }
}