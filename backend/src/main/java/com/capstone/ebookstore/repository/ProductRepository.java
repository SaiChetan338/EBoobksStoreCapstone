package com.capstone.ebookstore.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.capstone.ebookstore.entity.Product;

public interface ProductRepository extends MongoRepository<Product, String> {
}