import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from '../../../services/loader/loader.service';
import { MyInfoRepositoryService } from '../../../services/repositories/my-info-repository.service';
import { myInfo } from '../../../shared/models/my-info/my-info.model';


interface myInfoDetails  {
  name: string;
  value: string;
  isArray: boolean;
}

@Component({
  selector: 'my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.scss'],
})
export class MyInfoComponent implements OnInit {
  myInfoForm: FormGroup;
  myInfo: myInfo = {} as myInfo;
  displayedItems: myInfoDetails[] = [
    { name: 'Name', value: 'name', isArray: false },
    { name: 'Age', value: 'age', isArray: false },
    { name: 'Gender', value: 'gender', isArray: false },
    { name: 'Hobby', value: 'hobbies', isArray: true },
  ];
  editMode: boolean = false;
  dataLoaded: boolean = false;

  get hobbies(): FormArray {
    return this.myInfoForm.get('hobbies') as FormArray;
  }

  constructor(
    private myInfoService: MyInfoRepositoryService,
    private fb: FormBuilder,
    private loader: LoaderService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getMyInfo();
  }

  getMyInfo(): void {
    this.loader.setLoader(true);
    this.myInfoService.getMyInfo().subscribe((myInfo) => {
      this.myInfo = { ...myInfo };
      this.presetFormValues(myInfo);
      this.loader.setLoader(false);
      this.dataLoaded = true;
    }, (error) => {
      this.toastr.error('Failed to Load data from Server' + error.error.message)
    }
    );
  }

  presetFormValues(myInfo: myInfo): void {
    const { name, age, gender, hobbies } = myInfo;

    this.myInfoForm.patchValue({
      name: name,
      age: age,
      gender: gender,
    });

    if (hobbies) {
      for (const hobby of hobbies) this.addHobbies(hobby);
    }
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
    this.hobbies.removeAt(index);
  }

  onSubmit(): void {
    this.editMode = !this.editMode;
    this.toastr.success('Saved Succesfully', 'Toastr fun!');
    this.myInfoService.saveMyInfo(this.myInfoForm.value as myInfo);
    this.myInfo = { ...this.myInfoForm.value } as myInfo;
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
          Validators.pattern('^[1-9]+[0-9]*$'),
        ],
      ],
      gender: [
        '',
        [
          Validators.required,
          Validators.maxLength(1),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      hobbies: this.fb.array([]),
    });
  }
}
