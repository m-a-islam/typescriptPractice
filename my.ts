import { NumberFormatHeler } from "./NumberFormatHelper";



    const inputPriceNode: HTMLInputElement = document.getElementById('price-node') as HTMLInputElement;
    const inputResultNode: HTMLInputElement = document.getElementById('result-node') as HTMLInputElement;
    const inputDiscountNode: HTMLInputElement = document.getElementById('discount-node') as HTMLInputElement;
    inputDiscountNode.addEventListener('keydown', NumberFormatHeler.formatNumberFromGermanToEnglish);
    
    inputDiscountNode.addEventListener('keyup', (KeyboardEvent)=>{
        const totalPrice: string = inputResultNode.value;
        if (isNaN(parseFloat(inputResultNode.value))) {
            inputResultNode.value = totalPrice.replace('.',',');
        }
    
        //if multiple comma is given convert it to a single comma
        const tempInputDiscount: string = NumberFormatHeler.fixDecimalNumberInput(inputDiscountNode.value);
        if (inputResultNode.value === '') {
            inputResultNode.value = totalPrice;
        }
        if (isNaN(parseFloat(tempInputDiscount)) || isNaN(parseFloat(inputResultNode.value))) {
            inputResultNode.value = totalPrice;
        }else{
            inputResultNode.value = this.discountCalculation(inputPriceNode.value, tempInputDiscount)
        }
    
    });
    
    private discountCalculation(inputPriceNode, tempInputDiscount): string {
        const inPrice: string = NumberFormatHeler.numberView(inputPriceNode);
        const discountPrice: string = NumberFormatHeler.numberView(tempInputDiscount);
        const price: string = NumberFormatHeler.priceCalculation(inPrice, discountPrice);
        const temp: string = price.replace('.',',');
        return NumberFormatHeler.putDotOnNumber(temp);
    }


