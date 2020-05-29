import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostService} from '../service/postService';
import {finalize} from 'rxjs/operators';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {EditPostDto} from '../service/dataModel/editPostDTO';
import * as _ from 'lodash';
import {Observable} from 'rxjs';
import {PostDto} from '../service/dataModel/postDTO';
import {CreatePostDto} from '../service/dataModel/createPostDTO';

@Component({
    selector: 'app-create-post-dialog',
    templateUrl: 'createPostDialog.html'
})

export class CreatePostDialogComponent implements OnInit {
    public postModel: CreatePostDto | EditPostDto = {} as CreatePostDto;
    public isLoading = false;
    public isEditing = false;

    constructor(private dialogRef: MatDialogRef<CreatePostDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: { editPostDto: EditPostDto },
                private postService: PostService) {
    }

    ngOnInit(): void {
        this.isEditing = !!_.get(this.data, 'editPostDto');
        if (this.isEditing) {
            this.postModel = _.clone(this.data.editPostDto);
        }
    }

    public submit(form: NgForm) {
        if (form.valid) {
            this.isLoading = true;
            this.handleAfterSubmit(
                this.isEditing ?
                    this.postService.editPost(this.postModel as EditPostDto) :
                    this.postService.createPost(this.postModel)
            );

        }
    }

    private handleAfterSubmit(observable: Observable<PostDto>) {
        return observable
            .pipe(finalize(() => this.isLoading = false))
            .subscribe((response) => {
                this.dialogRef.close(response);
            });
    }
}