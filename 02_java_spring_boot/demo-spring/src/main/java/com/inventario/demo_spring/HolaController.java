package com.inventario.demo_spring;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController 
public class HolaController {
    

    @GetMapping("/")
    public String holamundo(){
        return "! hola mundo esta wea se hace tera larga ";
    }

}
