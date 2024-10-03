// Define the asynchronous function to fetch user data
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the HTML element where the data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Convert the response to JSON
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element to display user list
        const userList = document.createElement('ul');

        // Loop through the users array and create <li> for each user
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;  // Set the user's name as the text
            userList.appendChild(listItem);    // Append the <li> to the <ul>
        });

        // Append the <ul> to the dataContainer
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle any errors by clearing the container and showing a message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching data:', error);
    }
}

// Invoke fetchUserData once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
