package com.capstone.ebookstore.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.capstone.ebookstore.entity.Order;

public interface OrderRepository extends MongoRepository<Order, String> {
}