import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PetsApiClient } from '@app/_services/petsapi.client';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    totalCount = 0;
    pageOfItems: Array<any>;
    pageTitle: string;

    data: any = [];
    searchParams: any = [];

    constructor(
        private formBuilder: FormBuilder,
        private client: PetsApiClient,
        private route: ActivatedRoute,
        private router: Router) { }

    fillInTheBlanks() {
        this.form = this.formBuilder.group({
            term: [this.searchParams.term],
            cityId: [this.searchParams.cityId ?? 0],
            raceId: [this.searchParams.raceId ?? 0],
            ageValue: [this.searchParams.ageValue ?? 'None'],
            genderValue: [this.searchParams.genderValue ?? 'None'],
            sizeValue: [this.searchParams.sizeValue ?? 'None'],
            fromWhereValue: [this.searchParams.fromWhereValue ?? 'None']
        });

        // get items for total count
        this.client.getPets(this.searchParams.term, 0, 0, 0, null, null, 
            this.searchParams.petType, 
            this.searchParams.cityId, 
            this.searchParams.raceId, 
            this.searchParams.ageValue, 
            this.searchParams.genderValue, 
            this.searchParams.sizeValue, 
            this.searchParams.fromWhereValue)
            .subscribe(res => {
                this.totalCount = res.pagination.totalCount;
            }, error => console.error(error));

        this.client.getPetTypes()
            .subscribe(res => {
                this.pageTitle = res.find(r => r.value.toLowerCase() == this.searchParams.petType).text;
                this.data.petTypes = res;
            });

        this.client.getRacesForPetType(this.searchParams.petType)
            .subscribe(res => {
                this.data.races = res;
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
        this.route.params.subscribe(params => {
            this.searchParams = [];
            this.searchParams.petType = params['type'];

            this.fillInTheBlanks();
        });

        this.route.queryParams.subscribe(params => {
            this.searchParams.sizeValue = params['sizeValue'];

            this.fillInTheBlanks();
        });
    }

    get f() { return this.form.controls; }

    onChangePage(pageNumber) {
        this.searchParams.pageNumber = pageNumber;
        this.onSearch();
    }

    private onSearch() {
        this.loading = true;
        this.client.getPets(
            this.searchParams.term,
            0,
            this.searchParams.pageNumber,
            10,
            null,
            'id,title,description,published,cityText',
            this.searchParams.petType,
            this.searchParams.cityId,
            this.searchParams.raceId,
            this.searchParams.ageValue,
            this.searchParams.genderValue,
            this.searchParams.sizeValue,
            this.searchParams.fromWhereValue)
            .subscribe(res => {
                this.pageOfItems = res.value;
                this.loading = false;
            }, error => console.error(error));
    }

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

        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: this.searchParams,
            queryParamsHandling: 'merge'
        });

        this.onSearch();
    }
}