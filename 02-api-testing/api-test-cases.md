# API Test Cases – Reqres.in

Base URL: https://reqres.in/api

---

## GET Users

### TC-API-001: Get all users
Endpoint: GET /users?page=2

Expected Result:
- Status Code: 200
- Response contains list of users
- Data field is not empty

---

## GET Single User

### TC-API-002: Get valid user
Endpoint: GET /users/2

Expected Result:
- Status Code: 200
- User object is returned
- ID = 2

---

### TC-API-003: Get invalid user
Endpoint: GET /users/9999

Expected Result:
- Status Code: 404 or empty response

---

## POST Login

### TC-API-004: Successful login
Endpoint: POST /login
Body:
{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}

Expected Result:
- Status Code: 200
- Token is returned

---

### TC-API-005: Failed login (missing password)
Body:
{
  "email": "peter@klaven"
}

Expected Result:
- Status Code: 400
- Error message returned