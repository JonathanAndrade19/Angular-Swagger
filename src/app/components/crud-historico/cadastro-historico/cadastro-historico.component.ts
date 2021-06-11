import { Subscription } from 'rxjs';
import { MethodsEnum } from './../../../enum/enum';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Historico } from 'src/app/models/placeholder.model';
import { HistoricoService } from 'src/app/services/historico.service';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-cadastro-historico',
  templateUrl: './cadastro-historico.component.html',
  styleUrls: ['./cadastro-historico.component.css']
})
export class CadastroHistoricoComponent implements OnInit {

  @Input() public dataSource$!: number;
  @Output() public callParent = new EventEmitter();

  public form!: FormGroup;
  public retornValue!: Historico;
  private _id!: number | undefined;
  private _subscription!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private historicoservice: HistoricoService,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.mountForm();
    this._subscription = this.notification.notification.subscribe(() => { this.getById(); });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  public save(): void {
    if (this.form.valid) {
      const dados = this.form.getRawValue();
      const payload = this.mountPayload(dados);
      const postputHist = this._id ? MethodsEnum.PUT : MethodsEnum.POST;
      this.historicoservice.postPutHistorico(payload, postputHist).subscribe(arr => {
        this.callParent.emit();
        this.form.reset();
        alert('Combustivel salvo com Sucesso');
      }, error => {
        console.log(error);
      });
      return
    }
    alert('Todos os campos obrigatorios');
  }

  public mountForm(): void {
    this.form = this.formBuilder.group({
      combustivel: [null, [Validators.required]],
      data: [null, [Validators.required]],
      preco: [null, [Validators.required]]
    });
  }

  public mountPayload(dados: any): Historico {
    const newData = dados.data.split('-').reverse().join('/');
    const payload = {
      combustivel: dados.combustivel,
      data: newData,
      preco: dados.preco
    }
    if (this._id) {
      let updatePayload = Object.assign({ id: this._id }, payload);
      return updatePayload;
    }
    return payload;
  }

  public getById() {
    const id: number = this.dataSource$;
    console.log(id);
    if (id) {
      this.historicoservice.getByIdHistorico(id).subscribe(
      (res) => {
        this.returnValueId(res);
      }, (error: any) => {
        console.log(error);
      });
    }
  }

  public returnValueId(historico: Historico) {
    historico.data = historico.data.split('/').reverse().join('-');
    this.form.get('combustivel')?.setValue(historico.combustivel);
    this.form.get('data')?.setValue(historico.data);
    this.form.get('preco')?.setValue(historico.preco);
    this._id = historico.id;
  }
  
}
