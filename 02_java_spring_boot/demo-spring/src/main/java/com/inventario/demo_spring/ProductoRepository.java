package com.inventario.demo_spring;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository 
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    //Spring Data JPA genera solo todas las consultas SQL (SELECT, INSERT, etc.).
}
