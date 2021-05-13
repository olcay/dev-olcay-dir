import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '@app/_models';

import { AccountService, AlertService } from '@app/_services';
import { PetsApiClient } from '@app/_services/petsapi.client';
import { ModalService } from '../_modal';

@Component({ templateUrl: 'details.component.html' })
export class DetailsComponent implements OnInit {
    account = this.accountService.accountValue;
    petId = this.activatedRoute.snapshot.params.id;
    deleting = false;

    data: any = []
    tags: any = []

    constructor(
        private accountService: AccountService,
        private client: PetsApiClient,
        private activatedRoute: ActivatedRoute,
        private alertService: AlertService,
        private router: Router,
        private modalService: ModalService) { }

    getData() {
        this.client.getPet(this.petId)
            .subscribe(res => {
                this.data = res;
                this.data.isEditable = this.account != null && (res.createdBy.id.toString() === this.account.id || this.account.role === Role.Admin);
            }, error => console.error(error));
    }

    onDelete() {
        this.deleting = true;

        this.client.deletePet(this.petId)
            .subscribe(() => {
                this.alertService.success('Pet silindi.', { keepAfterRouteChange: true });
                this.router.navigate(['/profile']);
            });
    }

    ngOnInit() {
        this.getData();
    }

    onChangeStatus() {
        if (this.data.petStatus.value == "Published"){
            this.client.unpublishPet(this.petId)
            .subscribe(() => {
                this.getData();
            });
        } else {
            this.client.publishPet(this.petId)
            .subscribe(() => {
                this.getData();
            });
        }
    }

    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }
}