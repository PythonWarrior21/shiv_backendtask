# UNSW Bionic Heart | Software Technical Assessment

This assessment is a practical introduction to some of the work we do at UNSW Bionic Hearts. You will build one small part of a task management app: the endpoint that lets someone create a task.

## Task

Imagine a user fills in a form and submits a task. The app sends a `POST /tasks` request to the server with a title, description, and user ID, for example:

```json
{
  "title": "Complete assignment",
  "description": "Finish the COMP1531 assignment",
  "userId": 1
}
```

In `server.js`, implement the `POST /tasks` endpoint to read those values from the JSON request body. Before creating the task, check that the title is present and not just whitespace, that a user ID was provided, and that the user exists in the mock `users` array.

If everything checks out, create a task with a unique ID, store it in the `tasks` array, and return it with HTTP `201 Created`. If the title is missing or blank, or the user ID is missing, return `400 Bad Request`. If the user ID does not match a user, return `404 Not Found`.

## Testing
When you are ready to try it, start the server in one terminal:

   ```bash
   node server.js
   ```

Keep it running, then open a second terminal and run the test:

   ```bash
   node test.js
   ```

The test sends one valid request for user ID `1`. It checks that the server responds with HTTP `201` and returns a task ID, the expected title, and the user ID. If those checks pass, you will see `POST /tasks passed`. If not, check that the server is running and the endpoint is implemented.
