const cart = ["shoes", "pants", "kurta", "pyjama"];

// Consumer part of promise
const promise = createOrder(cart);
// Our expectation is above function is going to return me a promise.

promise.then(function (orderId) 
{
  proceedToPayment(orderId);
});

function validateCart(cart)
{
    if (cart.length >= 3)
    {
      return true;
    }

    else
    {
        return false;
    }
}

function proceedToPayment(orderId)
{
    console.log("This is the orderId: " + orderId);
}



// Producer part of Promise
function createOrder(cart) {
  // JS provides a Promise constructor through which we can create promise
  const promise = new Promise(function (resolve, reject) {
   
    // Now we will write logic to `createOrder`
    /** Mock logic steps
     * 1. validateCart
     * 2. Insert in DB and get an orderId
     */
    // We are assuming in real world scenario, validateCart would be defined
    if (validateCart(cart)) 
    {
        const orderId = "12345";
        // Success scenario
        resolve(orderId);
    }

    else
    {
        // If cart not valid, reject the promise
        const err = new Error("Cart is not Valid");
        reject(err);
    }

 });
  return promise;
}