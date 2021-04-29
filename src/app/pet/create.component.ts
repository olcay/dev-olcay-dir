import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AccountService, AlertService } from '@app/_services';
import { PetsApiClient, PetForCreationDto } from '@app/_services/petsapi.client';
export interface Tag {
    value: string;
    name: string;
}
@Component({ templateUrl: 'create.component.html' })
export class CreateComponent implements OnInit {
    account = this.accountService.accountValue;
    form: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService,
        private client: PetsApiClient
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            title: ['', Validators.required],
            description: [''],
            petType: ['Cat', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;

        var pet = new PetForCreationDto();
        pet.title = this.f.title.value;
        pet.description = this.f.description.value;
        pet.petTypeValue = this.f.petType.value;
        pet.cityId = 34;
        pet.name = this.f.title.value;
        pet.raceId = 42;

        this.client.createPet(pet).subscribe(res => {
            this.alertService.success('New pet is created!', { keepAfterRouteChange: true });
            this.router.navigate(['/']);
        }, error => {
            this.alertService.error(error);
            this.loading = false;
        });
    }
}