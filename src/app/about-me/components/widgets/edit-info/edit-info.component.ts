import { Component, OnInit, Input } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { MyInfoRepositoryService } from '../../../../services/repositories/my-info-repository.service';
import { MyInfo } from '../../../../shared/models/my-info/my-info.model';
import { MyInfoDetails } from '../../../../shared/models/my-info-details/my-info-details.model';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss'],
})
export class EditInfoComponent implements OnInit {
  @Input() myInfo: MyInfo;
  @Input() displayedItems: MyInfoDetails[];

  myInfoForm: FormGroup;

  get hobbies(): FormArray {
    return this.myInfoForm.get('hobbies') as FormArray;
  }

  getFormControl(formControlName: string): FormControl {
    return this.myInfoForm.get(formControlName) as FormControl;
  }

  constructor(
    private myInfoService: MyInfoRepositoryService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.presetFormValues();
  }

  presetFormValues(): void {
    const { name, age, gender, hobbies } = this.myInfo;

    this.myInfoForm.patchValue({
      name,
      age,
      gender
    });

    if (hobbies) {
      for (const hobby of hobbies) {
        this.addHobbies(hobby);
      }
    }
  }

  onClearInfo(): void {
    this.sharedDataService.changeMyInfo({
      data: { ...this.myInfo },
      submit: false,
    });
  }

  onSubmitInfo(): void {
    this.toastr.success('Info Saved Succesfully', 'Success');
    this.myInfoService.saveMyInfo(this.myInfoForm.value as MyInfo);
    this.myInfo = { ...this.myInfoForm.value } as MyInfo;
    this.sharedDataService.changeMyInfo({
      data: { ...this.myInfo },
      submit: true,
    });
  }

  addHobbies(value = ''): void {
    this.hobbies.push(
      this.fb.control(value, [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
      ])
    );
  }

  removeHobbies(index: number): void {
    if (this.hobbies.controls.length === 1) {
      this.toastr.error('Hobbies Should Be Atleast One', 'Error');
      return;
    }
    this.hobbies.removeAt(index);
  }

  private initForm(): void {
    this.myInfoForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      age: [
        '',
        [
          Validators.required,
          Validators.min(1),
          Validators.max(120),
          Validators.pattern('^[0-9]+[0-9]*$'),
        ],
      ],
      gender: ['', [Validators.required, Validators.pattern('^(?:M|F)$')]],
      hobbies: this.fb.array([]),
    });
  }
}
