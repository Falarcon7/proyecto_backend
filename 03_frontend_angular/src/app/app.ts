import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoService } from './services/producto.service';
import { Producto } from './services/producto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  productos: Producto[] = [];
  cargando: boolean = true;
  errorMensaje: string | null = null; // <--- Para alertas visuales
  
  nuevoProducto: any = {
    nombre: '',
    precio: null,
    stock: null
  };

  editandoId: number | null = null;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.cargando = true;
    this.errorMensaje = null;
    this.productoService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
        this.errorMensaje = 'No se pudo conectar con el servidor de Java (puerto 8080). ¿Está encendido?';
        this.cargando = false;
      }
    });
  }

  guardarProducto(): void {
    if (!this.nuevoProducto.nombre || this.nuevoProducto.precio === null || this.nuevoProducto.stock === null) {
      alert('Por favor completa todos los campos.');
      return;
    }

    if (this.editandoId !== null) {
      this.productoService.actualizarProducto(this.editandoId, this.nuevoProducto).subscribe({
        next: () => {
          this.cargarProductos();
          this.cancelarEdicion();
        },
        error: (err) => alert('Error al actualizar el producto.')
      });
    } else {
      this.productoService.crearProducto(this.nuevoProducto).subscribe({
        next: () => {
          this.cargarProductos();
          this.limpiarFormulario();
        },
        error: (err) => alert('Error al guardar el producto.')
      });
    }
  }

  cargarParaEditar(p: Producto): void {
    this.editandoId = p.id || null;
    this.nuevoProducto = { nombre: p.nombre, precio: p.precio, stock: p.stock };
  }

  cancelarEdicion(): void {
    this.editandoId = null;
    this.limpiarFormulario();
  }

  eliminarProducto(id: number | undefined): void {
    if (id === undefined) return;
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.productoService.eliminarProducto(id).subscribe({
        next: () => this.cargarProductos(),
        error: (err) => alert('Error al eliminar el producto.')
      });
    }
  }

  limpiarFormulario(): void {
    this.nuevoProducto = { nombre: '', precio: null, stock: null };
  }
}