export class Product {
    uid: number;
    nombre: string;
    marca: string;
    descripcion: string;
    precio: number;
    existencia: number;
    imagen: string;
    constructor(uid: number, nombre: string, marca: string, descripcion: string, precio: number, existencia: number, imagen: string) {
        this.uid = uid;
        this.nombre = nombre;
        this.marca = marca;
        this.descripcion = descripcion;
        this.precio = precio;
        this.existencia = existencia;
        this.imagen = imagen;
    }
}
