# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: project_05.spec.ts >> verify the tta test
- Location: tests\project_05.spec.ts:2:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.mt-2 text-3xl font-bold')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.mt-2 text-3xl font-bold')

```

```
Tearing down "context" exceeded the test timeout of 30000ms.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - status [ref=e9]: Transfer processed successfully.
    - generic [ref=e10]:
      - complementary [ref=e11]:
        - generic [ref=e12]:
          - img [ref=e13]
          - generic [ref=e16]: TTA Bank
        - navigation [ref=e18]:
          - button "Dashboard" [ref=e19] [cursor=pointer]:
            - img [ref=e20]
            - text: Dashboard
          - button "Transfer Funds" [ref=e25] [cursor=pointer]:
            - img [ref=e26]
            - text: Transfer Funds
          - button "Expense Tracker" [ref=e29] [cursor=pointer]:
            - img [ref=e30]
            - text: Expense Tracker
          - button "Transactions" [ref=e33] [cursor=pointer]:
            - img [ref=e34]
            - text: Transactions
          - button "AI Support" [ref=e38] [cursor=pointer]:
            - img [ref=e39]
            - text: AI Support
          - button "Settings" [ref=e41] [cursor=pointer]:
            - img [ref=e42]
            - text: Settings
        - generic [ref=e45]:
          - generic [ref=e46]:
            - img "User" [ref=e47]
            - generic [ref=e48]:
              - generic [ref=e49]: Sangi
              - generic [ref=e50]: sangi@example.com
          - button "Sign Out" [ref=e51] [cursor=pointer]:
            - img [ref=e52]
            - text: Sign Out
      - main [ref=e55]:
        - generic [ref=e56]:
          - heading "Transfer Funds" [level=1] [ref=e57]
          - button [ref=e59] [cursor=pointer]:
            - img [ref=e60]
        - generic [ref=e65]:
          - generic [ref=e66]:
            - button "Transfer Money" [ref=e67] [cursor=pointer]
            - button "Manage Beneficiaries" [ref=e68] [cursor=pointer]
          - generic [ref=e70]:
            - generic [ref=e71]:
              - generic [ref=e72]: From Account
              - combobox [ref=e73]:
                - 'option "Savings Account - 9938 (Available: $30,000)" [selected]'
                - 'option "Current Account - 8821 (Available: $15,000)"'
            - img [ref=e76]
            - generic [ref=e78]:
              - generic [ref=e79]: To Beneficiary
              - generic [ref=e80]:
                - combobox [ref=e81]:
                  - option "Sarah Smith (Chase) - 1234567890" [selected]
                  - option "Landlord (Wells Fargo) - 0987654321"
                - button "Add New Beneficiary" [ref=e82] [cursor=pointer]:
                  - img [ref=e83]
            - generic [ref=e84]:
              - generic [ref=e85]: Amount
              - generic [ref=e86]:
                - generic:
                  - generic: $
                - spinbutton [ref=e87]
              - paragraph [ref=e88]: "Max available: $30,000"
            - generic [ref=e89]:
              - generic [ref=e90]: Note (Optional)
              - textbox "e.g. Rent for October" [ref=e91]
            - button "Continue" [ref=e92] [cursor=pointer]
  - generic [ref=e93]: $0k
```