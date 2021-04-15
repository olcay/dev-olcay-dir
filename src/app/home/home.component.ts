import { Component, OnInit } from '@angular/core';

import { AccountService } from '@app/_services';
import { ItemDirApiClient } from '@app/_services/itemdirapi.client';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    account = this.accountService.accountValue;

    itemLength = 0;
    pageOfItems: Array<any>;

    constructor(private accountService: AccountService, private client: ItemDirApiClient) { }

    getData() {
        // get items for total count
        this.client.getItems(undefined, undefined, 1, 0, undefined, undefined)
            .subscribe(res => {
                this.itemLength = res.pagination.totalCount;
            }, error => console.error(error));
    }

    ngOnInit() {
        this.getData()
    }

    onChangePage(pageNumber) {
        this.client.getItems(undefined, undefined, pageNumber, 10, undefined, undefined)
            .subscribe(res => {
                this.pageOfItems = res.value;
            }, error => console.error(error));
    }
}