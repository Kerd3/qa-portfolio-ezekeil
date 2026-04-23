# Bug Reports – SauceDemo

---

## BUG-001: Login does not show error message for empty credentials

Environment:
- Chrome
- Windows 10

Steps:
1. Open login page
2. Leave username and password empty
3. Click Login

Expected Result:
System should show validation error message

Actual Result:
No clear error message displayed

Severity: High
Priority: High

Impact:
Users are not guided properly, causing poor UX

---

## BUG-002: Cart icon not updating after adding item

Steps:
1. Login
2. Click "Add to cart"

Expected Result:
Cart icon should show "1"

Actual Result:
Cart remains at "0"

Severity: Critical
Priority: High

Impact:
User cannot confirm item was added