import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '@app/_services';
import { PetsApiClient } from '@app/_services/petsapi.client';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    loading = false;
    totalCount = 0;
    pageOfItems: Array<any>;
    pageTitle: string;
    searchParams: any = [];

    constructor(
        private client: PetsApiClient,
        private route: ActivatedRoute,
        private searchService: SearchService) { }

    fillInTheBlanks() {
        this.searchService.sendMessage(this.searchParams);

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
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.searchParams = [];
            this.searchParams.petType = params['type'];

            this.client.getPetTypes()
                .subscribe(res => {
                    this.pageTitle = res.find(r => r.value.toLowerCase() == this.searchParams.petType).text;
                });

            this.fillInTheBlanks();
        });

        this.route.queryParams.subscribe(params => {
            this.searchParams.sizeValue = params['sizeValue'];
            this.searchParams.raceId = params['raceId'];
            this.searchParams.cityId = params['cityId'];
            this.searchParams.ageValue = params['ageValue'];
            this.searchParams.genderValue = params['genderValue'];
            this.searchParams.fromWhereValue = params['fromWhereValue'];
            this.searchParams.term = params['term'];

            this.fillInTheBlanks();
        });
    }

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
            'id,title,description,published,cityText,images',
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
}