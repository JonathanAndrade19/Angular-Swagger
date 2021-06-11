import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseMunicipioService } from 'src/app/services/base-municipio.service';

@Component({
  selector: 'app-base-municipio',
  templateUrl: './base-municipio.component.html',
  styleUrls: ['./base-municipio.component.css']
})
export class BaseMunicipioComponent implements OnInit {

  public valueMoney!: string;
  public form!: FormGroup;

  constructor(private baseMunicipio: BaseMunicipioService, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.mountForm();
  }

  public filter() {
    if (this.form.valid) {
      const municipio = this.form.get('municipio')?.value;
      this.baseMunicipio.getBaseMunicipio(municipio).subscribe(
        (res) => {
          this.valueMoney = res;
        }, (error: any) => {
          console.log(error);
      });
      return
    }
    alert('Campo Municipio deve ser obrigatorio');
  }

  public mountForm(): void {
    this.form = this.formBuilder.group({
      municipio: [null, [Validators.required]],
    });
  }


}
