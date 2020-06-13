export class NumberFormatHeler{
    public static formatNumberFromGermanToEnglish(event): void {
        let predefinedKeyboardCodes: number[];
        const inputKeyboardCode: number = event.key.charCodeAt();
        const inputKeyboardValue: string = event.target.value;
        const countComma: number = (inputKeyboardValue.match(/,/g) || []).length;
        predefinedKeyboardCodes = [66,48,49,50,51,52,53,54,55,56,57];
        if (countComma > 0) {
            NumberFormatHeler.preventDefaultAnyString(event,predefinedKeyboardCodes, inputKeyboardCode);
        }else{
            predefinedKeyboardCodes.push(44);
            NumberFormatHeler.preventDefaultAnyString(event,predefinedKeyboardCodes, inputKeyboardCode);
        }
    }
    public static fixDecimalNumberInput(text: string): string{
        const splittedString: string[] = text.split(',');
        let fixedString: string = '';
        if (splittedString.length === 1) { // without comma
            fixedString = splittedString[0];            
        } else if (splittedString.length > 1){
            fixedString = splittedString[0]+',';
            for (let i = 1; i < splittedString.length; i++) {
                 fixedString += splittedString[i];
            }
        }
        return fixedString;
    }
    public static stringToNumber(str: string): number {
        const tempStr: string = str.replace(',', '.');
        const tempNumber: number = parseFloat(tempStr);
        return tempNumber;
    }
    public static putDotOnNumber(str: string): string {
        let tempStr: string = '';
        const splitNumber: string[] = str.split(',');
        const preDotValue: string = splitNumber[0];
        const postDotValue: string = splitNumber[1];
        if (preDotValue.length<4) {
            tempStr = preDotValue;
        }else if(preDotValue.length === 4){
            tempStr = [preDotValue.slice(0,1), '.', preDotValue.slice(1)].join('');
        } else if( preDotValue.length === 5){
            tempStr = [preDotValue.slice(0,2), '.', preDotValue.slice(2)].join('');
        }else if(preDotValue.length === 6){
            tempStr = [preDotValue.slice(0,3), '.', preDotValue.slice(3)].join('');
        }
        return tempStr.concat(',', postDotValue);
    }

    public static numberView(str: string): string {
        const germanValue: string[] = str.split(',');
        const removeDot: string = germanValue[0].replace('.',',');
        const tempValue: string = '';
        if (germanValue[1]=== undefined) {
            germanValue[1] = '0';
        }
        return tempValue.concat(removeDot, ',', germanValue[1]);
    }
    public static priceCalculation(inPrice, discountPrice): string {
        let price: string = '';
        const discoutn: string = '';
        let result: number = 0;
        const tempPrice: number = parseFloat(inPrice);
        const tempDiscountPrice: number = parseFloat(discountPrice);
        result = tempPrice - (tempDiscountPrice*100)/tempPrice;
        price = result.toFixed(2);
        return price;
    }

    private static preventDefaultAnyString(event, predefinedKeyboardCodes: number[], inputKeyboardCode: number): void{
        if (!predefinedKeyboardCodes.includes(inputKeyboardCode)) {
            event.preventDefault();
        }
    }
}