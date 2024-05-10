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





