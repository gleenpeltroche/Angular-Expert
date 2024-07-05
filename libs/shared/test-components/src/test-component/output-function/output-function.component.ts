import { Component, ComponentRef, ViewChild, ViewContainerRef, output, signal, input, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {outputToObservable} from '@angular/core/rxjs-interop';
import { Subscription, concatMap, of, timer } from 'rxjs';
import { ButtonComponent } from '@shared-ui/atoms';
import { TitleCasePipe } from '@angular/common';

@Component({
    standalone: true,
    imports: [FormsModule, ButtonComponent],
    templateUrl: './child.component.html',
})
export class OutputFunctionChildComponent {
    name = signal('');

    // OUTPUT FUNCTION
    outputValue = output<string>({alias: 'aliasOutput'});
    onClick() {
        this.outputValue.emit(this.name());
    }
}

@Component({
  standalone: true,
  imports: [OutputFunctionChildComponent, ButtonComponent, TitleCasePipe],
  template: `
    @if (!componentRef) {
    <lib-my-button
      [buttonName]="'Render dynamically!'"
      (click)="onClick()"
      #button
    />
    }
    <div #placeToRender></div>
    @if (nameLenght() > 0) {
    <h2>Your name is</h2>
    } @if (name()) {
    <h2>{{ name() | titlecase }}</h2>
    }
  `,
})
export class OutputFunctionComponent implements OnDestroy {
  name = signal('');
  nameLenght = signal(0);

  @ViewChild('placeToRender', { read: ViewContainerRef })
  placeToRenderRef!: ViewContainerRef;
  @ViewChild('button', { read: ViewContainerRef }) buttonRef!: ViewContainerRef;
  componentRef!: ComponentRef<any>;
  outputObservable!: Subscription;

  onClick() {
    this.componentRef = this.placeToRenderRef.createComponent(
      OutputFunctionChildComponent
    );

    /* Subscribing programmatically */
    // componentInstance.instance.outputValue.subscribe(newName => {
    //     console.log(newName);
    // });

    /* Subscribing programmatically AND Converting to an observable */
    this.outputObservable = outputToObservable<string>(
      this.componentRef.instance.outputValue
    ) // Observable<string>
      .pipe(
        concatMap((name) => {
          this.nameLenght.set(name.length);
          return name;
        }),
        concatMap((name) => timer(1000).pipe(concatMap(() => of(name))))
      )
      .subscribe((character) => {
        console.log('EMITING VALUE: ' + character);
        this.name.update((value) => value + character);
      });
  }

  ngOnDestroy(): void {
    console.log('ON DESTROY!');
    this.outputObservable?.unsubscribe();
    this.componentRef?.destroy();
  }
}
