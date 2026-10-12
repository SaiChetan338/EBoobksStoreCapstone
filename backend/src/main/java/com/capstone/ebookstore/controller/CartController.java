package com.capstone.ebookstore.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.capstone.ebookstore.entity.CartItem;
import com.capstone.ebookstore.service.CartService;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin("*")
public class CartController {

    private final CartService service;

    public CartController(CartService service) {
        this.service = service;
    }

    @PostMapping
    public CartItem addToCart(@RequestBody CartItem item) {
        return service.addToCart(item);
    }

    @GetMapping
    public List<CartItem> getCartItems() {
        return service.getCartItems();
    }

    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable String id) {
        service.deleteItem(id);
    }
}