import { Directive, ElementRef, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CleaveOptions } from './interfaces/cleave-options.interface';

declare var Cleave: any;

@Directive({
  selector: '[ng2Cleave]'
})
export class CleaveDirective implements OnInit {

  @Input() options: CleaveOptions = {};

  @Input() creditCard: boolean = false;
  @Input() creditCardStrictMode: boolean = false;
  @Input() creditCardType: string = '';
  @Output() onCreditCardTypeChanged: EventEmitter<any> = new EventEmitter<any>();

  @Input() phone: boolean = false;
  @Input() phoneRegionCode: string = '';
  @Input() phoneFormatter: any = {};

  @Input() date: boolean = false;
  @Input() datePattern: string[] = ['d', 'm', 'Y'];
  @Input() dateFormatter: any = {};

  @Input() numeral: boolean = false;
  @Input() numeralDecimalScale: number = 2;
  @Input() numeralDecimalMark: string = '.';
  @Input() numeralThousandsGroupStyle: string = 'thousand';
  @Input() numeralPositiveOnly: boolean = false;

  @Input() numericOnly: boolean = false;

  @Input() uppercase: boolean = false;
  @Input() lowercase: boolean = false;

  @Input() prefix: string = '';
  @Input() prefixLength: number = this.prefix.length;

  @Input() rawValueTrimPrefix: boolean = false;
  @Input() copyDelimiter: boolean = false;

  @Input() initValue: string = '';

  @Input() delimiter: string = ' ';
  @Input() delimiters: string[] = [];

  @Input() blocks: string[] | number[] = [];
  @Input() blocksLength: number = this.blocks.length;

  @Input() maxLength: number = 0;

  @Input() backspace: boolean = false;

  @Input() result: string = '';

  cleaveInstance: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    console.log('init');

    console.log('options', this.getOptions());
    this.cleaveInstance = new Cleave(this.elementRef.nativeElement, this.getOptions());
  }

  getOptions(): CleaveOptions {
    return {
      creditCard: this.options.creditCard || this.creditCard,
      creditCardStrictMode: this.options.creditCardStrictMode || this.creditCardStrictMode,
      creditCardType: this.options.creditCardType ? this.options.creditCardType : this.creditCardType,

      phone: this.options.phone || this.phone,
      phoneRegionCode: this.options.phoneRegionCode ? this.options.phoneRegionCode : this.phoneRegionCode,
      phoneFormatter: this.options.phoneFormatter ? this.options.phoneFormatter : this.phoneFormatter,

      date: this.options.date || this.date,
      datePattern: this.options.datePattern ? this.options.datePattern : this.datePattern,
      dateFormatter: this.options.dateFormatter ? this.options.dateFormatter : this.dateFormatter,

      numeral: this.options.numeral || this.numeral,
      numeralDecimalScale: this.options.numeralDecimalScale >= 0 ? this.options.numeralDecimalScale : this.numeralDecimalScale,
      numeralDecimalMark: this.options.numeralDecimalMark ? this.options.numeralDecimalMark : this.numeralDecimalMark,
      numeralThousandsGroupStyle: this.options.numeralThousandsGroupStyle ? this.options.numeralThousandsGroupStyle : this.numeralThousandsGroupStyle,
      numeralPositiveOnly: this.options.numeralPositiveOnly || this.numeralPositiveOnly,
      numericOnly: this.options.numericOnly || this.numericOnly,

      uppercase: this.options.uppercase || this.uppercase,
      lowercase: this.options.lowercase || this.lowercase,

      prefix: this.options.prefix ? this.options.prefix : this.prefix,
      prefixLength: this.options.prefix ? this.options.prefix.length : this.prefixLength,

      rawValueTrimPrefix: this.options.rawValueTrimPrefix || this.rawValueTrimPrefix,
      copyDelimiter: this.options.copyDelimiter || this.copyDelimiter,

      initValue: this.options.initValue ? this.options.initValue : this.initValue,

      delimiter: this.options.delimiter ? this.options.delimiter : this.delimiter,
      delimiters: this.options.delimiters && this.options.delimiters.length ? this.options.delimiters : this.delimiters,

      blocks: this.options.blocks && this.options.blocks.length ? this.options.blocks : this.blocks,
      blocksLength: this.options.blocks && this.options.blocks.length ? this.options.blocks.length : this.blocksLength,

      maxLength: this.options.maxLength ? this.options.maxLength : this.maxLength,

      backspace: this.options.backspace || this.backspace,

      result: this.options.result ? this.options.result : this.result
    };
  }
}
