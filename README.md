# Unhandled Error in Express.js Route Handler

This repository demonstrates a common error in Express.js route handlers:  lack of proper error handling for invalid input.

The `bug.js` file contains the erroneous code.  The `bugSolution.js` file provides a corrected version.

## Problem

The `/users/:id` route attempts to find a user based on the provided ID.  However, it doesn't handle cases where the ID is not a valid number. This can lead to unexpected behavior or crashes.

## Solution

The corrected code in `bugSolution.js` includes comprehensive error handling using `isNaN()` to check for numeric IDs and a more informative error response.