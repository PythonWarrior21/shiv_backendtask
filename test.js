async function testPostTask() {
  try {
    const response = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'Test task',
        description: 'Checking task creation',
        userId: 1,
      }),
    });

    const task = await response.json();

    if (
      response.status !== 201 ||
      !task.id ||
      task.title !== 'Test task' ||
      task.userId !== 1
    ) {
      throw new Error(`Unexpected response (${response.status}): ${JSON.stringify(task)}`);
    }

    console.log('POST /tasks passed');
  } catch (error) {
    console.error('POST /tasks failed:', error.message);
    process.exitCode = 1;
  }
}

testPostTask(); 