package com.capstone.ebookstore.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.capstone.ebookstore.entity.CartItem;
import com.capstone.ebookstore.repository.CartRepository;

@Service
public class CartService {

    private final CartRepository repository;

    public CartService(CartRepository repository) {
        this.repository = repository;
    }

    public CartItem addToCart(CartItem item) {
        return repository.save(item);
    }

    public List<CartItem> getCartItems() {
        return repository.findAll();
    }
}