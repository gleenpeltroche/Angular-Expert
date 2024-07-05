import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, input, signal, computed, afterRender, afterNextRender } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '@shared-ui/atoms'

@Component({
    standalone: true,
    imports: [],
    template: `
        <p>{{signalInputValue()}}</p>
    `,
    selector: 'test-lifecycle-child',
})
export class LifeCycleChildComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked {
    signalInputValue = input<string>('', {alias: 'value'});
    @Input() inputValue: number | null = null;
    constructor(){
        console.log("CONSTRUCTOR");
        afterRender(() => {
            console.log("afterRender");
        });
        afterNextRender(() => {
            console.log("afterNextRender");
        });
    }
    ngOnInit(): void {
        console.log("ngOnInit");
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log("ngOnChanges");
        console.log('   INPUTS: ',{
            nombre: changes['signalInputValue']?.currentValue || '',
            edad: changes['inputValue']?.currentValue || null,

        });
    }
    ngDoCheck(): void {
        console.log("ngDoCheck");
    }
    ngOnDestroy(): void {
        console.log("ngOnDestroy");
    }
    ngAfterViewInit(): void {
        console.log("ngAfterViewInit");
    }
    ngAfterContentInit(): void {
        console.log("ngAfterContentInit");
    }
    ngAfterViewChecked(): void {
        console.log("ngAfterViewChecked");
    }
    ngAfterContentChecked(): void {
        console.log("ngAfterContentChecked");
    }
    afterRender() {
        console.log("afterRender");
    }
}

@Component({
  standalone: true,
  imports: [LifeCycleChildComponent, ButtonComponent, FormsModule],
  templateUrl: './lifecycle.component.html',
})
export class LifeCycleComponent {
  name = signal('');
  age = signal(null);
  isChildVisible = signal(false);
  buttonName = computed(() =>
    this.isChildVisible() ? 'HIDE Component' : 'SHOW Component'
  );
}
