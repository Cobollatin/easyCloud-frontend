import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'quote',
    templateUrl    : './quote.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuoteComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
