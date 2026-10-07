package com.capstone.ebookstore.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cartitems")
public class CartItem {

    @Id
    private String id;

    private String productId;
    private String productTitle;
    private int quantity;

    public CartItem() {
    }

    public CartItem(String id, String productId, String productTitle, int quantity) {
        this.id = id;
        this.productId = productId;
        this.productTitle = productTitle;
        this.quantity = quantity;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getProductTitle() {
        return productTitle;
    }

    public void setProductTitle(String productTitle) {
        this.productTitle = productTitle;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}