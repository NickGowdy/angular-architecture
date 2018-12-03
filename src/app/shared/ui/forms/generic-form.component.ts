import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './generic-form.component.html',
})

export class GenericForm implements OnInit {
    constructor(){}

    @Input() model: any;

    modelForm = ({}) as FormGroup;

    ngOnInit(): void {
        for (let key in this.model) {
            console.log(key);
            this.modelForm.addControl(key, new FormControl([Validators.required]));
        }
    }
}