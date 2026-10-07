package com.capstone.ebookstore.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.capstone.ebookstore.entity.Order;
import com.capstone.ebookstore.repository.OrderRepository;

@Service
public class OrderService {

    private final OrderRepository repository;

    public OrderService(OrderRepository repository) {
        this.repository = repository;
    }

    public Order placeOrder(Order order) {
        return repository.save(order);
    }

    public List<Order> getOrders() {
        return repository.findAll();
    }
}