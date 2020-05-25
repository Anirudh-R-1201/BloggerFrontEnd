import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-post-list',
    templateUrl: 'postList.html',
    styleUrls: ['postList.css']
})

export class  PostListComponent  implements OnInit{
    constructor(){}
    public list = postList;

    ngOnInit(){

    }
}

const postList =[
    {
        title: 'Title',
        subtite: 'Subtitile',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'
    },
    {
        title: 'Title2',
        subtite: 'Subtitile2',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'
    },
    {
        title: 'Title3',
        subtite: 'Subtitile3',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'
    },{
        title: 'Title4',
        subtite: 'Subtitile4',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'
    },
]