# QA API Automation Tech Task – ReqRes

Automated API testing framework using **TypeScript**, **Jest**, and **Axios** for the [ReqRes.in](https://reqres.in/) public API.  
**By Neha Kumari, Senior QA Automation Engineer**

---

## 📋 Project Overview

This project demonstrates a clean, maintainable API automation solution using TypeScript, Jest, Axios, and .env best practices.

It fulfills Task 1 of the Foundation Health QA Tech Assessment:

- Create a user
- Get user details
- Update user
- Delete user
- Verify user is no longer retrievable after deletion

All tests are modular and mapped to the assessment requirements.

---

## 🚀 How to Set Up and Run This Project

**1. Clone the repository**
```bash
git clone https://github.com/nehadarira12/qa-api-automation-reqres.git
cd qa-api-automation-reqres
```

**2. Rename .env file from the example**
- Copy the sample environment file and rename it to .env by running:
```bash
copy .env.example .env
```
- The public ReqRes API key (reqres-free-v1) is already included and ready to use.

**3. Install all dependencies**

```bash
npm install
```
**4.Run the automated tests**
```bash
npm test
```

| Step | Command                | Description                                   |
| ---- | ---------------------- | --------------------------------------------- |
| 1    | `git clone ...`        | Download the project code                     |
| 2    | `cp .env.example .env` | Set up environment variables for API access   |
| 3    | `npm install`          | Install all dependencies (see `package.json`) |
| 4    | `npm test`             | Run all API automation tests                  |

## 🧪 Test Cases Covered (Task 1)

The following end-to-end scenarios are automated and validated:

1. **Creates a new user**
2. **Gets an existing (static) user**  
   _Note: ReqRes does not persist created users, so a static user is used_
3. **Updates a user** _(static/mock)_
4. **Deletes a user** _(static/mock)_
5. **Attempts to retrieve a non-existent user**  
   _(404/401 error expected)_

---

**All test cases include:**
-  Assertions on status codes and response content
-  Clear mapping to assessment requirements

## 📋 Project Structure
```bash
src/
  api/reqresClient.ts       # API client helpers
  tests/user.e2e.test.ts    # Main E2E CRUD test cases
.env.example                # Sample env file (safe/public key)
.gitignore                  # Standard ignores (node_modules, .env)
jest.config.js              # Jest config for TypeScript
package.json                # Project scripts & dependencies
tsconfig.json               # TypeScript configuration
```
## ℹ️ Notes & To Do

- No real secrets are in the code; `.env` is for demonstration only and follows best practice.
- The API key is safe to share (`reqres-free-v1`) as required by ReqRes.in.
- The API is a demo/mock service, so created/updated data is not persisted.

### 📝 To Do (if more time):
- Add further negative/edge cases
- Support data-driven and parallel execution
- Enhance reporting and CI integration


## 👩‍💻 Author

**Neha Kumari**  
Senior QA Automation Engineer  
[LinkedIn](https://linkedin.com/in/neha-kumari-istqb)  
[Email](mailto:nehakumar067@gmail.com)

---

## 💡 Questions?
For any queries or feedback, please open an issue or contact me directly.



