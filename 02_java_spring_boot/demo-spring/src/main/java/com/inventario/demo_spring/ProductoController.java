package com.inventario.demo_spring;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;




@RestController 
@RequestMapping("/productos")
@CrossOrigin(origins = "*")
public class ProductoController {

    private final ProductoRepository productoRepository;

    public ProductoController(ProductoRepository productoRepository){
        this.productoRepository = productoRepository;

    }
    
    @GetMapping 
    public List<Producto> listarProductos(){
        return productoRepository.findAll();
    }

    @PostMapping 
    public Producto crearProducto(@RequestBody Producto producto){
        return productoRepository.save(producto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Producto> actualizarProducto(@PathVariable Long id, @RequestBody Producto productoDetalles){
        return productoRepository.findById(id).map(producto -> {
                producto.setNombre(productoDetalles.getNombre());
                producto.setPrecio(productoDetalles.getPrecio());
                producto.setStock(productoDetalles.getStock());
                Producto actualizado = productoRepository.save(producto);
                return ResponseEntity.ok(actualizado);
            }).orElse(ResponseEntity.notFound().build());
            
    } 
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarProducto(@PathVariable Long id){
        if (productoRepository.existsById(id)){
            productoRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
