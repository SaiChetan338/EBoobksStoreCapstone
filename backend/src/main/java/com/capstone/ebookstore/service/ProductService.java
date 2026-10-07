package com.capstone.ebookstore.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.capstone.ebookstore.entity.Product;
import com.capstone.ebookstore.repository.ProductRepository;

@Service
public class ProductService {

    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public Product addProduct(Product product) {
        return repository.save(product);
    }

    public List<Product> getAllProducts() {
        return repository.findAll();
    }
}