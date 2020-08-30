export const isListValid = list => {
  if (list !== undefined && list !== null) {
    if (list.length > 0) return true;

    return false;
  }

  return false;
};

// Function to check data is not undefined or null
export const isDataValid = data => {
  if (data !== null && data !== undefined) return true;

  return false;
};
