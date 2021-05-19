import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PetsApiClient } from '@app/_services/petsapi.client';
import { Subscription } from 'rxjs';
import { SearchService } from '@app/_services';

@Component({ selector: 'pet-search', templateUrl: 'search.component.html' })
export class SearchComponent implements OnInit {
    @Output() submit = new EventEmitter();
    form: FormGroup;
    submitted = false;
    loading = false;

    data: any = [];
    searchParams: any = [];
    subscription: Subscription;

    constructor(
        private formBuilder: FormBuilder,
        private client: PetsApiClient,
        private route: ActivatedRoute,
        private router: Router,
        private searchService: SearchService) {
        // subscribe to home component messages
        this.subscription = this.searchService.onMessage().subscribe(message => {
            this.searchParams = message;

            this.initForm();
        });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

    initForm() {
        this.form = this.formBuilder.group({
            term: [this.searchParams.term],
            cityId: [this.searchParams.cityId ?? 0],
            raceId: [this.searchParams.raceId ?? 0],
            ageValue: [this.searchParams.ageValue ?? 'None'],
            genderValue: [this.searchParams.genderValue ?? 'None'],
            sizeValue: [this.searchParams.sizeValue ?? 'None'],
            fromWhereValue: [this.searchParams.fromWhereValue ?? 'None']
        });

        if (this.searchParams.petType) {
            this.client.getRacesForPetType(this.searchParams.petType)
                .subscribe(res => {
                    this.data.races = res;
                });
        }
    }

    fillInTheBlanks() {
        this.client.getPetTypes()
            .subscribe(res => {
                this.data.petTypes = res;
            });

        this.client.getCities()
            .subscribe(res => {
                this.data.cities = res;
            });

        this.client.getAges()
            .subscribe(res => {
                this.data.ages = res;
            });

        this.client.getGenders()
            .subscribe(res => {
                this.data.genders = res;
            });

        this.client.getSizes()
            .subscribe(res => {
                this.data.sizes = res;
            });

        this.client.getFromWhere()
            .subscribe(res => {
                this.data.fromWhere = res;
            });
    }

    ngOnInit() {
        this.initForm();
        this.fillInTheBlanks();
    }

    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.searchParams.raceId = this.form.value.raceId;
        this.searchParams.cityId = this.form.value.cityId;
        this.searchParams.ageValue = this.form.value.ageValue;
        this.searchParams.genderValue = this.form.value.genderValue;
        this.searchParams.sizeValue = this.form.value.sizeValue;
        this.searchParams.fromWhereValue = this.form.value.fromWhereValue;
        this.searchParams.term = this.form.value.term;

        this.router.navigate(['pet/list/cat'], {
            queryParams: this.searchParams,
            queryParamsHandling: 'merge'
        });

        this.submit.emit();
    }
}