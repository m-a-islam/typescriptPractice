"use strict";
var _this = this;
exports.__esModule = true;
var NumberFormatHelper_1 = require("./NumberFormatHelper");
var inputPriceNode = document.getElementById('price-node');
var inputResultNode = document.getElementById('result-node');
var inputDiscountNode = document.getElementById('discount-node');
inputDiscountNode.addEventListener('keydown', NumberFormatHelper_1.NumberFormatHeler.formatNumberFromGermanToEnglish);
inputDiscountNode.addEventListener('keyup', function (KeyboardEvent) {
    var totalPrice = inputResultNode.value;
    if (isNaN(parseFloat(inputResultNode.value))) {
        inputResultNode.value = totalPrice.replace('.', ',');
    }
    //if multiple comma is given convert it to a single comma
    var tempInputDiscount = NumberFormatHelper_1.NumberFormatHeler.fixDecimalNumberInput(inputDiscountNode.value);
    if (inputResultNode.value === '') {
        inputResultNode.value = totalPrice;
    }
    if (isNaN(parseFloat(tempInputDiscount)) || isNaN(parseFloat(inputResultNode.value))) {
        inputResultNode.value = totalPrice;
    }
    else {
        inputResultNode.value = _this.discountCalculation(inputPriceNode.value, tempInputDiscount);
    }
});
discountCalculation(inputPriceNode, tempInputDiscount);
string;
{
    var inPrice = NumberFormatHelper_1.NumberFormatHeler.numberView(inputPriceNode);
    var discountPrice = NumberFormatHelper_1.NumberFormatHeler.numberView(tempInputDiscount);
    var price = NumberFormatHelper_1.NumberFormatHeler.priceCalculation(inPrice, discountPrice);
    var temp = price.replace('.', ',');
    return NumberFormatHelper_1.NumberFormatHeler.putDotOnNumber(temp);
}
