"use strict";
exports.__esModule = true;
exports.NumberFormatHeler = void 0;
var NumberFormatHeler = /** @class */ (function () {
    function NumberFormatHeler() {
    }
    NumberFormatHeler.formatNumberFromGermanToEnglish = function (event) {
        var predefinedKeyboardCodes;
        var inputKeyboardCode = event.key.charCodeAt();
        var inputKeyboardValue = event.target.value;
        var countComma = (inputKeyboardValue.match(/,/g) || []).length;
        predefinedKeyboardCodes = [66, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
        if (countComma > 0) {
            NumberFormatHeler.preventDefaultAnyString(event, predefinedKeyboardCodes, inputKeyboardCode);
        }
        else {
            predefinedKeyboardCodes.push(44);
            NumberFormatHeler.preventDefaultAnyString(event, predefinedKeyboardCodes, inputKeyboardCode);
        }
    };
    NumberFormatHeler.fixDecimalNumberInput = function (text) {
        var splittedString = text.split(',');
        var fixedString = '';
        if (splittedString.length === 1) { // without comma
            fixedString = splittedString[0];
        }
        else if (splittedString.length > 1) {
            fixedString = splittedString[0] + ',';
            for (var i = 1; i < splittedString.length; i++) {
                fixedString += splittedString[i];
            }
        }
        return fixedString;
    };
    NumberFormatHeler.stringToNumber = function (str) {
        var tempStr = str.replace(',', '.');
        var tempNumber = parseFloat(tempStr);
        return tempNumber;
    };
    NumberFormatHeler.putDotOnNumber = function (str) {
        var tempStr = '';
        var splitNumber = str.split(',');
        var preDotValue = splitNumber[0];
        var postDotValue = splitNumber[1];
        if (preDotValue.length < 4) {
            tempStr = preDotValue;
        }
        else if (preDotValue.length === 4) {
            tempStr = [preDotValue.slice(0, 1), '.', preDotValue.slice(1)].join('');
        }
        else if (preDotValue.length === 5) {
            tempStr = [preDotValue.slice(0, 2), '.', preDotValue.slice(2)].join('');
        }
        else if (preDotValue.length === 6) {
            tempStr = [preDotValue.slice(0, 3), '.', preDotValue.slice(3)].join('');
        }
        return tempStr.concat(',', postDotValue);
    };
    NumberFormatHeler.numberView = function (str) {
        var germanValue = str.split(',');
        var removeDot = germanValue[0].replace('.', ',');
        var tempValue = '';
        if (germanValue[1] === undefined) {
            germanValue[1] = '0';
        }
        return tempValue.concat(removeDot, ',', germanValue[1]);
    };
    NumberFormatHeler.priceCalculation = function (inPrice, discountPrice) {
        var price = '';
        var discoutn = '';
        var result = 0;
        var tempPrice = parseFloat(inPrice);
        var tempDiscountPrice = parseFloat(discountPrice);
        result = tempPrice - (tempDiscountPrice * 100) / tempPrice;
        price = result.toFixed(2);
        return price;
    };
    NumberFormatHeler.preventDefaultAnyString = function (event, predefinedKeyboardCodes, inputKeyboardCode) {
        if (!predefinedKeyboardCodes.includes(inputKeyboardCode)) {
            event.preventDefault();
        }
    };
    return NumberFormatHeler;
}());
exports.NumberFormatHeler = NumberFormatHeler;
