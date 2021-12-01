import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevoPersonaje: Personaje = { nombre: '', poder: 0 };
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzService: DbzService) {}

  agregar() {
    if (this.nuevoPersonaje.nombre.trim().length === 0) {
      return;
    }

    console.log('Nuevo personaje=> ', this.nuevoPersonaje);

    this.dbzService.agregarPersonaje(this.nuevoPersonaje);
    //this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevoPersonaje = {
      nombre: '',
      poder: 0,
    };
  }

  cambiarNombre(event: any) {
    console.log(event.target.value);
  }
}
