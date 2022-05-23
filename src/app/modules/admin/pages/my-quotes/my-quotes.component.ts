/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MyQuotesService } from 'app/core/my-quotes/my-quotes.service';
import { quotes } from 'app/mock-api/pages/my-quotes/data';
@Component({
    selector       : 'my-quotes',
    templateUrl    : './my-quotes.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyQuotesComponent implements OnInit
{
    q: Array<any> = [];
    length: number = 0;

   constructor( private myQuotesService: MyQuotesService)
   {
}
    ngOnInit(): void {
        this.getQuotes();
    }

    getQuotes() {
        this.q = quotes;
        this.length = this.q.length;
    }

}
