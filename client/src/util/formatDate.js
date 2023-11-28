function formatDateString(dateString) {
    // Parse the string into a Date object
    const date = new Date(dateString);
  
    // Define options for toLocaleDateString
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
  
    // Convert to the desired format and return
    return date.toLocaleDateString('en-US', options).replace(' ', '. ');
  }

export default formatDateString
  
// Example usage:
// const formattedDate = formatDateString("12/25/2023");
// console.log(formattedDate);  // Output: "Dec. 25, 2023"