// Selecting DOM Elements
const adviceIdSpan = document.getElementById('slip-id');
const adviceTextParagraph = document.getElementById('slip-text');
const fetchBtn = document.getElementById('fetch-btn');

// API Endpoint URL
const API_URL = 'https://adviceslip.com';

// Async function to fetch data from the API
async function getAdvice() {
    try {
        // Change text state while waiting for API response
        adviceTextParagraph.textContent = "Loading wisdom...";
        
        // Fetch data from external API URL
        const response = await fetch(API_URL);
        
        // Validate if response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Convert response data to JSON format
        const data = await response.json();
        
        // Update DOM elements with values fetched from the API
        adviceIdSpan.textContent = data.slip.id;
        adviceTextParagraph.textContent = `"${data.slip.advice}"`;
        
    } catch (error) {
        // Handle runtime errors or offline conditions safely
        console.error("Error fetching advice:", error);
        adviceTextParagraph.textContent = "Oops! Failed to load advice. Please check your internet connection and try again.";
    }
}

// Attach click event listener to the button element
fetchBtn.addEventListener('click', getAdvice);
