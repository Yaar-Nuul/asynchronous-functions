// Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
// The function should log the message to the console after the specified delay time.

async function logMessageWithDelay(message, delay) {
    await new Promise(resolve => 
        setTimeout(resolve, delay));
    console.log(message);
    
}


logMessageWithDelay("Hello, World!", 2000);




// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID.
// Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.

const userIds = ["001", "002", "003", "004", "005"];

const fetchAndLogUserData = async () => {
    for (const id of userIds) {
        try {
            const userData = await getUserData(id);
            console.log(userData);
        } catch (error) {
            console.error(`Error fetching user data for ID ${id}: ${error.message}`);
        }
    }
};

fetchAndLogUserData();





// You have an asynchronous function performTask() that returns a Promise. 
// The Promise resolves if the task is successful and rejects if there's an error. 
// Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.

async function handleTask() {
    try {
        await performTask();
        console.log("Task completed successfully!");
    } catch (error) {
        console.error("Error occurred during task execution:", error);
    }
}




// Retry Logic:
// Scenario:
// Write a function unstableTask that:

// 1.Accepts a taskName and failureProbability (a number between 0 and 1).
// 2. Returns a Promise that:
// Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
// Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
// Write another function executeWithRetry that:

// Accepts a taskName, retries, and failureProbability.
// Uses a retry mechanism to attempt the unstableTask up to retries times.
// Logs whether the task succeeded or failed after all attempts.



function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        if (random > failureProbability) {
            resolve(`${taskName} completed successfully.`);
        } else {
            reject(`${taskName} failed with probability ${failureProbability}.`);
        }
    });
}

async function executeWithRetry(taskName, retries, failureProbability) {
    let attempt = 0;
    while (attempt < retries) {
        try {
            const result = await unstableTask(taskName, failureProbability);
            console.log(result);
            return; 
        } catch (error) {
            console.error(`Attempt ${attempt + 1}: ${error}`);
            attempt++;
        }
    }
    console.log(`${taskName} failed after ${retries} attempts.`);
}

executeWithRetry("Unstable Task", 3, 0.9)