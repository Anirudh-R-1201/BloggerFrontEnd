import {Component, OnInit} from '@angular/core';
import { PostService } from '../service/postService';
import { CreatePostDto } from '../service/dataModel/createPostDTO';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-post-list',
    templateUrl: 'postList.html',
    styleUrls: ['postList.css']
})

export class  PostListComponent  implements OnInit{
    public list: Observable<CreatePostDto[]>;
    constructor(private postService: PostService){}
    ngOnInit(){
        this.list = this.postService.getAllPostItems();
    }
}
