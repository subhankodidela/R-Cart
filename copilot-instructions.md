# R-Cart Copilot Instructions

## Project goal
Build and improve a lightweight shopping cart application with simple, maintainable code and realistic sample data.

## Coding standards
- Prefer simple JavaScript and clear function names.
- Keep the API JSON responses consistent.
- Validate required request fields before mutating cart state.
- Avoid hardcoded secrets or environment values in source files.
- Add comments only where the logic is not obvious.

## Suggested workflow
1. Read the user story or requirement.
2. Keep route logic simple and centralized.
3. Reuse helper functions where logic repeats.
4. Keep sample data realistic and testable.
5. Verify the app still runs after changes.

## Validation
- Run the app with the project start script.
- Confirm the health route and product routes return valid JSON.
- Ensure cart updates behave correctly with valid and invalid inputs.
