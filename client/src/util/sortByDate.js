function sortByDate(a, b) {

    // Convert date strings to date objects
    let dateA = new Date(a.date);
    let dateB = new Date(b.date);

    // Compare the dates
    return dateA - dateB;
   
}

export default sortByDate