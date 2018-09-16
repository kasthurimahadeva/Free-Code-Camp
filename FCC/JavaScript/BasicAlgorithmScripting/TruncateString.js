// Truncate a String
// my idea

function truncateString(str, num) {
    // Clear out that junk in your trunk
    return (str.length > num) ? str.substr(0, num) + "..." : str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);