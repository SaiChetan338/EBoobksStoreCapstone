package com.capstone.ebookstore.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.capstone.ebookstore.entity.Product;
import com.capstone.ebookstore.service.ProductService;

@RestController
@RequestMapping("/api/products")
@CrossOrigin("*")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return service.getAllProducts();
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return service.addProduct(product);
    }
}