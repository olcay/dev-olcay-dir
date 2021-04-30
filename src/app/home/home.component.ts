import { Component, OnInit } from '@angular/core';

import { AccountService } from '@app/_services';
import { FromWhere, Gender, PetAge, PetsApiClient, PetType, Size } from '@app/_services/petsapi.client';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    account = this.accountService.accountValue;

    itemLength = 0;
    pageOfItems: Array<any>;

    constructor(
        private accountService: AccountService,
        private client: PetsApiClient) { }

    getData() {
        // get items for total count
        this.client.getPets(null, 0, 0, 0, null, null, PetType.Cat, 0, 0, PetAge.None, Gender.None, Size.None, FromWhere.None)
            .subscribe(res => {
                this.itemLength = res.pagination.totalCount;
            }, error => console.error(error));
    }

    ngOnInit() {
        this.getData();
    }

    onChangePage(pageNumber) {
        this.client.getPets(null, 0, pageNumber, 10, null, null, PetType.Cat, 0, 0, PetAge.None, Gender.None, Size.None, FromWhere.None)
            .subscribe(res => {
                this.pageOfItems = res.value;
            }, error => console.error(error));
    }
}