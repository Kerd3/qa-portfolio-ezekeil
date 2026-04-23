# Test Cases – SauceDemo

---

## 🔐 LOGIN MODULE

### TC-001: Valid Login
Steps:
1. Open SauceDemo
2. Enter valid username: standard_user
3. Enter password: secret_sauce
4. Click Login

Expected Result:
User should be redirected to product page

Priority: High
Type: Positive

---

### TC-002: Invalid Login
Steps:
1. Enter invalid username/password
2. Click Login

Expected Result:
Error message displayed: "Username and password do not match"

Priority: High
Type: Negative

---

### TC-003: Empty Credentials
Steps:
1. Leave username and password blank
2. Click Login

Expected Result:
System should show validation error

Priority: Medium
Type: Negative

---

## 🛒 CART MODULE

### TC-004: Add Item to Cart
Steps:
1. Login successfully
2. Click "Add to cart" on any product

Expected Result:
Cart icon updates with item count

Priority: High
Type: Functional

---

### TC-005: Remove Item from Cart
Steps:
1. Add item to cart
2. Remove item

Expected Result:
Cart becomes empty

Priority: Medium
Type: Functional