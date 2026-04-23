# API Bug Reports – Reqres.in

---

## BUG-API-001: Missing validation message on login failure

Endpoint: POST /login

Steps:
1. Send request with only email
2. No password field

Expected Result:
Clear validation error message (e.g., "Password required")

Actual Result:
Generic error response without clear guidance

Severity: Medium
Priority: High

Impact:
Developers may not understand correct API usage easily