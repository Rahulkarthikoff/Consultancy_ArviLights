// dispaly Money In indian Formate
export const displayMoney = function(num) {
  const numFormate = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  const arr = numFormate.format(num).split(".", 1);
  return arr[0];
};

// Calculate Discount Percentage
export const calculateDiscount = (discountedPrice, originalPrice) => {
  const disCountPercent = (discountedPrice / originalPrice) * 100;
  return disCountPercent;
};



// calculate Total  Amount
export const calculateTotal = (arr) => {
  const total = arr.reduce((accum, curr) => accum + curr, 0);
  return total;
};


export function generateDiscountedPrice(price, offer, offerPercentage, offerEndDate) {
  console.log(price, offer, offerPercentage, offerEndDate);

  // const now = new Date();

  // if (offer && offerEndDate && new Date(offerEndDate) > now) {
  //   const discounted = price - (price * offerPercentage) / 100;
  //   return discounted.toFixed(2);
  // } else if(new Date(offerEndDate) < now){
  //   offer = false;
   
  //   offerPercentage = 0;
  // }
  if (offer && offerPercentage && offerEndDate) {
    const now = new Date();
    const endDate = new Date(offerEndDate);

    if (endDate > now) {
      return price - (price * (offerPercentage / 100));
    }
  }

  return price;
 
  
}

