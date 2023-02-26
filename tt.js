const cityDistances = {
  "Belgrade": {
    "Amsterdam": 1840,
    "Berlin": 1286,
    "Barcelona": 2418,
    "Paris": 1663,
    "London": 2219,
    "Praugue": 1125,
    "Istanbul": 930
  },
  "Amsterdam": {
    "Belgrade": 1840,
    "Berlin": 652,
    "Barcelona": 1500,
    "Paris": 431,
    "London": 402,
    "Praugue": 804,
    "Istanbul": 2513
  },
  "Berlin": {
    "Belgrade": 1286,
    "Amsterdam": 652,
    "Barcelona": 1494,
    "Paris": 1051,
    "London": 930,
    "Praugue": 280,
    "Istanbul": 1704
  },
  "Barcelona": {
    "Belgrade": 2418,
    "Amsterdam": 1500,
    "Berlin": 1494,
    "Paris": 831,
    "London": 1133,
    "Praugue": 1526,
    "Istanbul": 2987
  },
  "Paris": {
    "Belgrade": 1663,
    "Amsterdam": 431,
    "Berlin": 1051,
    "Barcelona": 831,
    "London": 344,
    "Praugue": 1038,
    "Istanbul": 2483
  },
  "London": {
    "Belgrade": 2219,
    "Amsterdam": 402,
    "Berlin": 930,
    "Barcelona": 1133,
    "Paris": 344,
    "Praugue": 1084,
    "Istanbul": 2925
  },
  "Praugue": {
    "Belgrade": 1125,
    "Amsterdam": 804,
    "Berlin": 280,
    "Barcelona": 1526,
    "Paris": 1038,
    "London": 1084,
    "Istanbul": 1455
  },
  "Istanbul": {
    "Belgrade": 930,
    "Amsterdam": 2513,
    "Berlin": 1704,
    "Barcelona": 2987,
    "Paris": 2483,
    "London": 2925,
    "Praugue": 1455
  }
};

// Function to calculate travel time based on distance and mode of transportation
function calculateTravelTime(distance, modeOfTransport) {
  switch (modeOfTransport) {
    case "car":
      return distance / 80; // Assuming average car speed of 80 km/h
    case "train":
      return distance / 120; // Assuming average train speed of 120 km/h
    case "plane":
      return distance / 800; // Assuming average plane speed of 800 km/h
    default:
      return "Invalid mode of transportation.";
  }
}

// Example usage
console.log(calculateTravelTime(cityDistances["Belgrade"]["Amsterdam"], "car")); // Output: 23
console.log(calculateTravelTime(cityDistances["Amsterdam"]["Berlin"], "train")); // Output: 5.433333333333334

