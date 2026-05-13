# 09 - Frames & Iframes

This folder contains Playwright tests for handling frames and iframes on web pages.

## Tests

| File | Description |
|------|-------------|
| `single_iframe.spec.ts` | Interacts with a single iframe — fills a vehicle registration form inside `#frame-one` and submits/resets it. |
| `multiple_frame.spec.ts` | Handles multiple `<frame>` elements (main, side, footer) on a frameset page — clicks links and reads content across frames. |
| `nested_iframes.spec.ts` | Chains through 3 levels of nested iframes (`#pact1` > `#pact2` > `#pact3`) and fills inputs in each. |
| `iframe_nestediframe.spec.ts` | Uses `selectorshub.com` to test deeply nested iframes with 3 levels of iframe chaining. |

## Key Concepts Covered

- `page.frameLocator()` — to locate elements inside iframes/frames
- Chaining `frameLocator()` across nested iframes
- `page.frames()` — listing all frames on a page
- Interacting with elements inside different frame contexts
- Using `getByPlaceholder`, `getByTestId`, `getByText` within frame locators
