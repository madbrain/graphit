import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

// https://github.com/gottsohn/inline-edit-tutorial/blob/master/src/app/components/custom/inline-edit/inline-edit.component.ts
// https://medium.com/@majdasab/implementing-control-value-accessor-in-angular-1b89f2f84ebf

@Component({
  selector: 'app-inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InlineEditComponent),
      multi: true
    }
  ]
})
export class InlineEditComponent implements OnInit, ControlValueAccessor {

  @ViewChild('inlineEditControl') inlineEditControl: ElementRef;

  private _value: string = '';
  private preValue: string = '';
  private onChange: any = () => {};

  public editing: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  get value() { return this._value; }

  set value(v) {
    if (v !== undefined && v !== this._value) {
      this._value = v;
    }
  }

  public writeValue(value: any) {
    this._value = value;
  }

  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
  }

  public onBlur($event: Event) {
    this.editing = false;
    this.onChange(this._value);
  }

  public onKeyDownEnter($event: Event) {
    this.editing = false;
  }

  public edit(value: string) {
    this.preValue = value;
    this.editing = true;
    setTimeout(() => this.inlineEditControl.nativeElement.focus());
  }

  public cancel() {
    this.value = this.preValue;
    this.editing = false;
  }

}
