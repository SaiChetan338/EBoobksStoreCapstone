package com.capstone.ebookstore.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cartitems")
public class CartItem {

    @Id
    private String id;

    private String productId;
    private String productTitle;
    private String author;
    private String category;
    private String imageUrl;
    private double price;
    private int quantity;

    public CartItem() {
    }

    public CartItem(
            String id,
            String productId,
            String productTitle,
            String author,
            String category,
            String imageUrl,
            double price,
            int quantity) {

        this.id = id;
        this.productId = productId;
        this.productTitle = productTitle;
        this.author = author;
        this.category = category;
        this.imageUrl = imageUrl;
        this.price = price;
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

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}