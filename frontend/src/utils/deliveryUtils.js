// export const calculateDeliveryDate = (customerPincode, shopPincode) => {
//     const deliveryDaysMapping = {
//       "short": 2, // Short distance
//       "medium": 5, // Medium distance
//       "long": 7, // Long distance
//     };
  
//     // Example logic to determine distance category
//     const distanceCategory = customerPincode === shopPincode
//       ? "short"
//       : Math.abs(customerPincode - shopPincode) < 1000
//       ? "medium"
//       : "long";
  
//     const deliveryDays = deliveryDaysMapping[distanceCategory];
//     const estimatedDate = new Date();
//     estimatedDate.setDate(estimatedDate.getDate() + deliveryDays);
  
//     return estimatedDate.toLocaleDateString(); // Format as MM/DD/YYYY
//   };


export const calculateDeliveryDate = async (customerPincode, shopPincode) => {
    const deliveryDaysByRegion = {
      fast: 2,    // Tamil Nadu
      medium: 5,  // Kerala, Karnataka, Andhra Pradesh, Telangana
      slow: 7     // Others
    };
  
    const getStateFromPincode = async (pincode) => {
      try {
        const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
        const data = await res.json();
        return data[0]?.PostOffice?.[0]?.State || "Unknown";
      } catch (error) {
        console.error(`Error fetching state for PIN ${pincode}:`, error);
        return "Unknown";
      }
    };
  
    const customerState = await getStateFromPincode(customerPincode);
    const shopState = await getStateFromPincode(shopPincode);
  
    const fastStates = ["Tamil Nadu"];
    const mediumStates = ["Kerala", "Karnataka", "Andhra Pradesh", "Telangana"];
  
    let deliveryDays = deliveryDaysByRegion.slow;
  
    if (customerState === "Tamil Nadu" && shopState === "Tamil Nadu") {
      deliveryDays = deliveryDaysByRegion.fast;
    } else if (
      fastStates.includes(shopState) && mediumStates.includes(customerState) ||
      mediumStates.includes(shopState) && mediumStates.includes(customerState)
    ) {
      deliveryDays = deliveryDaysByRegion.medium;
    }
  
    const estimatedDate = new Date();
    estimatedDate.setDate(estimatedDate.getDate() + deliveryDays);
  
    return estimatedDate.toLocaleDateString(); // e.g. MM/DD/YYYY
  };
  