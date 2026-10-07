package com.capstone.ebookstore.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.capstone.ebookstore.entity.CartItem;

public interface CartRepository extends MongoRepository<CartItem, String> {

}