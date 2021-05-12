import { Component, OnInit } from '@angular/core';
import { FromWhere, Gender, PetAge, PetsApiClient, PetType, Size } from '@app/_services/petsapi.client';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    totalCount = 0;
    pageOfItems: Array<any>;

    constructor(
        private client: PetsApiClient) { }

    getData() {
        // get items for total count
        this.client.getPets(null, 0, 0, 0, null, null, PetType.All, 0, 0, PetAge.None, Gender.None, Size.None, FromWhere.None)
            .subscribe(res => {
                this.totalCount = res.pagination.totalCount;
            }, error => console.error(error));
    }

    ngOnInit() {
        this.getData();
    }

    onChangePage(pageNumber) {
        this.client.getPets(null, 0, pageNumber, 10, null, null, PetType.All, 0, 0, PetAge.None, Gender.None, Size.None, FromWhere.None)
            .subscribe(res => {
                this.pageOfItems = res.value;
            }, error => console.error(error));
    }
}