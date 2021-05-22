import { Component, Input } from '@angular/core';

@Component({ selector: 'pet-card', templateUrl: 'card.component.html' })
export class CardComponent {
    @Input() pet : any;
}