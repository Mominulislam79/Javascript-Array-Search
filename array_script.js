// 1. Problem: Find the First Occurrence of a Value in an Array

// Scenario: You have an array of product IDs, and you need to find the first occurrence of a specific product ID.

const productIDs = [101, 205, 303, 101, 505];
const searchID = 101;

const index = productIDs.indexOf(searchID);

if (index !== -1) {
    console.log(`Product ID ${searchID} found at index ${index}`);
} else {
    console.log(`Product ID ${searchID} not found`);
}
