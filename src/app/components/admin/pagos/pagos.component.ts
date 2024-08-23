import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../../../cargar-scripts.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.css'
})
export class PagosComponent implements OnInit {

  constructor(private _CargaScripts:CargarScriptsService){
    _CargaScripts.Carga(["targeta/targeta"]);

  }

  ngOnInit():any {
  
  }

}
