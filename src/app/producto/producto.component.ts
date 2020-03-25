import { Component, OnInit } from '@angular/core';
import { Product } from './Producto';
import { from } from 'rxjs';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  busqueda = '';
  productos: Product[];
  productosMostrados: Product[];
  aplicarFiltroExistencia = false;
  aplicarFiltroPrecio = false;
  aplicarFiltroExistencia3 = false;
  buscar() {
    this.productosMostrados = this.productos.filter(product => {
      return product.nombre.toUpperCase().includes(this.busqueda.toUpperCase()) ||
      product.descripcion.toUpperCase().includes(this.busqueda.toUpperCase());
    });
    if (this.aplicarFiltroExistencia) {
      this.productosMostrados = this.productosMostrados.filter(product => {
        return product.existencia > 0;
      });
    }
    if (this.aplicarFiltroPrecio) {
      this.productosMostrados.sort((p1, p2) => {
        if (p1.precio < p2.precio) {
          return -1;
        }
        if (p1.precio > p2.precio) {
          return 1;
        }
        return 0;
      });
    }
  }
  existsFilter(event) {
    if (event.target.checked) {
      this.aplicarFiltroExistencia = true;
    } else {
      this.aplicarFiltroExistencia = false;
    }
    this.buscar();
  }
  priceFilter(event) {
    if (event.target.checked) {
      this.aplicarFiltroPrecio = true;
    } else {
      this.aplicarFiltroPrecio = false;
    }
    this.buscar();
  }
  exists3Filter(event) {
    if(event.target.checked) {
      this.aplicarFiltroExistencia3 = true;
    } else {
      this.aplicarFiltroExistencia3 = false;
    }
    this.buscar();
  }
    constructor() {
    this.productos = [
      new Product(12, 'Smartphone', 'LG', 'Quadcore 3GHZ', 12018.5, 5, 'https://i.picsum.photos/id/12/150/150.jpg'),
      new Product(123, 'Smartwatch', 'Sony', '3GB Ram', 4999.9, 0, 'https://i.picsum.photos/id/123/150/150.jpg'),
      new Product(34, 'SmartTV', 'Sony', '52 pulgadas, Conexión wifi', 8999.9, 3, 'https://i.picsum.photos/id/34/150/150.jpg')
    ];
    this.productosMostrados = this.productos;
  }

    ngOnInit(): void {
  }

}
