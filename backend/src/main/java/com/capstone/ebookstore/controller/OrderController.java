package com.capstone.ebookstore.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.capstone.ebookstore.entity.Order;
import com.capstone.ebookstore.service.OrderService;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin("*")
public class OrderController {

    private final OrderService service;

    public OrderController(OrderService service) {
        this.service = service;
    }

    @PostMapping
    public Order placeOrder(@RequestBody Order order) {
        return service.placeOrder(order);
    }

    @GetMapping
    public List<Order> getOrders() {
        return service.getOrders();
    }
}