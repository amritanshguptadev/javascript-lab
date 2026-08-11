typeof (10 + "5");
5 === "5";
let x = 10;
x += 5;
console.log(x);
console.log(true && false || true);
console.log(10 % 3);

let result = 10 + 5 * 2 - (3 + 2) % 2 ** 2;
console.log(result);

let val = 4 + 3 * 2 ** 2 - 6 / 3;
console.log(val);

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

let marks = 68;
let grade = marks >= 90 ? "A"
  : marks >= 75 ? "B"
  : marks >= 60 ? "C"
  : marks >= 40 ? "D"
  : "F";
console.log(grade);

let age = 8;
let ticketPrice = age < 5 ? "Free"
  : age < 12 ? "₹100"
  : age < 60 ? "₹250"
  : "₹150";
console.log(ticketPrice);

let cartTotal = 1500;
let shipping = cartTotal >= 2000 ? "Free Shipping"
  : cartTotal >= 1000 ? "₹50"
  : "₹100";
console.log(shipping);

let isMember = true;
let totalSpent = 6000;
let discountType = (isMember && totalSpent >= 5000) ? "VIP Discount"
  : totalSpent >= 5000 ? "Regular Discount"
  : "No Discount";
console.log(discountType);

const dailyExpenses = [250, 400, 150, 600, 300];
const expTotal = dailyExpenses[0] + dailyExpenses[1] + dailyExpenses[2] + dailyExpenses[3] + dailyExpenses[4];
const expAverage = expTotal / dailyExpenses.length;
console.log("Total:", expTotal, "Average:", expAverage);

const scores = [72, 85, 60, 90, 55];
const scoreSum = scores[0] + scores[1] + scores[2] + scores[3] + scores[4];
const scoreAvg = scoreSum / scores.length;
const scoreResult = scoreAvg >= 40 ? "Pass" : "Fail";
console.log("Sum:", scoreSum, "Average:", scoreAvg, "Result:", scoreResult);

const item1 = { name: "Notebook", price: 60, qty: 3 };
const item2 = { name: "Pen", price: 10, qty: 5 };
const item3 = { name: "Bag", price: 800, qty: 1 };
const item4 = { name: "Pencil Box", price: 120, qty: 2 };

const subtotal1 = item1.price * item1.qty;
const subtotal2 = item2.price * item2.qty;
const subtotal3 = item3.price * item3.qty;
const subtotal4 = item4.price * item4.qty;
const grandTotal = subtotal1 + subtotal2 + subtotal3 + subtotal4;
console.log("Grand Total:", grandTotal);

console.log("5" + 3);
console.log("5" - 3);
console.log("abc" * 2);
console.log(NaN === NaN);
console.log([] == false);
console.log("10" == 10);
console.log(null + 1);
console.log(typeof NaN);

const p1 = { name: "Notebook", price: 60, qty: 3 };
const p2 = { name: "Pen", price: 10, qty: 5 };
const p3 = { name: "Bag", price: 800, qty: 1 };

console.log(typeof p1.price, typeof p2.price, typeof p3.price);

const s1 = p1.price * p1.qty;
const s2 = p2.price * p2.qty;
const s3 = p3.price * p3.qty;
const cartGrandTotal = s1 + s2 + s3;

const discountPercent = cartGrandTotal >= 5000 ? 20
  : cartGrandTotal >= 2000 ? 10
  : cartGrandTotal >= 1000 ? 5
  : 0;

const discountAmount = cartGrandTotal * discountPercent / 100;
const afterDiscount = cartGrandTotal - discountAmount;
const gst = afterDiscount * 0.18;
const finalPayable = afterDiscount + gst;
const freeShipping = afterDiscount >= 1500 || true;
const loyaltyPoints = Math.floor(finalPayable / 100);

console.log("--- Receipt ---");
console.log(p1.name + ": ₹" + s1);
console.log(p2.name + ": ₹" + s2);
console.log(p3.name + ": ₹" + s3);
console.log("Grand Total: ₹" + cartGrandTotal);
console.log("Discount: " + discountPercent + "% = ₹" + discountAmount);
console.log("After Discount: ₹" + afterDiscount);
console.log("GST (18%): ₹" + gst.toFixed(2));
console.log("Final Payable: ₹" + finalPayable.toFixed(2));
console.log("Shipping: " + (freeShipping ? "FREE" : "₹100 shipping charge"));
console.log("Loyalty Points: " + loyaltyPoints);
