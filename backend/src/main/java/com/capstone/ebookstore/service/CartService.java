package com.capstone.ebookstore.service;

import java.util.List;
import java.util.Optional;

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

        Optional<CartItem> existing =
                repository.findByProductId(item.getProductId());

        if (existing.isPresent()) {

            CartItem cartItem = existing.get();

            cartItem.setQuantity(
                    cartItem.getQuantity() + 1);

            return repository.save(cartItem);
        }

        return repository.save(item);
    }

    public List<CartItem> getCartItems() {
        return repository.findAll();
    }

    public void deleteItem(String id) {
        repository.deleteById(id);
    }
}