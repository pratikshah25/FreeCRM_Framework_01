# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ContactPageTest.spec.js >> @e2e @Regression Verify user is on Contact page
- Location: tests\ContactPageTest.spec.js:7:5

# Error details

```
Test timeout of 60000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e5]: FreeCRM
  - heading "Login" [level=1] [ref=e7]
  - generic [ref=e8]:
    - generic [ref=e9]:
      - generic [ref=e10]: Email*
      - textbox "Email" [active] [ref=e12]
    - generic [ref=e13]:
      - generic [ref=e14]: Password*
      - generic [ref=e15]:
        - textbox "Password" [ref=e16]
        - button "show_password" [ref=e17] [cursor=pointer]
    - button "Login" [ref=e21] [cursor=pointer]
  - generic [ref=e22]:
    - generic [ref=e23]: or
    - iframe [ref=e27]:
      - button "Continue with Google. Opens in new tab" [ref=f1e3] [cursor=pointer]:
        - generic [ref=f1e5]: Continue with Google
    - button "Continue with Microsoft" [ref=e28] [cursor=pointer]
  - generic [ref=e35]:
    - link "Forgot your password?" [ref=e36] [cursor=pointer]:
      - /url: /password/forgot
    - generic [ref=e37]:
      - text: No Account? Registration takes only a few seconds
      - link "Sign Up" [ref=e38] [cursor=pointer]:
        - /url: /register
```