import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Mathy } from 'src/app/models/mathy/mathy';
import { MathService } from 'src/app/services/math/math.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {

  form!: FormGroup;
  data = new Mathy(10);
  loading: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private mathService: MathService) { }

  ngOnInit(): void {


    this.form = this.formBuilder.group({
      denominator: ['10'],
      answer: ['1']
    });

  }

  calcalute() {
    return this.mathService.getAnswer(this.form.controls['denominator'].value)
      .subscribe(response => {
        this.data.answer = response.answer;
        this.data.denominator = response.denominator;
      },
        err => {
        this.data.answer = -1
          console.log(err);
      });
  }

    // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

}
