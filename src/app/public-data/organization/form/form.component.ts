import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public baseInfo: FormGroup;
  public auxiliaryInfo: FormGroup;
  public code: string;
  public num: string;
  public financialCoding: string;
  public name: string;

  constructor(private location: Location, private fb: FormBuilder) {
    this.baseInfo = this.fb.group({
      code: '',
      num: '',
      financialCoding: '',
      name: ''
    });
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
