import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { Empleados } from '../../interfaces/empleados.interface'

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';


const ELEMENT_DATA: Empleados[] = [
{id:1,nombre:"Juan",puesto:'director',departamento:'administracion'},
{id:1,nombre:"Juan",puesto:'director',departamento:'administracion'},
{id:1,nombre:"Juan",puesto:'director',departamento:'administracion'},
]


@Component({
    selector: 'app-lista-empleados',
    standalone: true,
    imports: [
      CommonModule,
      MatProgressSpinnerModule,
      MatButtonModule,
      MatTableModule,
    ],
    templateUrl: './lista.component.html',
    styleUrl: './lista.component.scss',
  })
  export class listaEmpleado {
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;
  }