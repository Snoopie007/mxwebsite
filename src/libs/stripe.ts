import { Stripe, loadStripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;


export const getStripe = () => {

    if (!stripePromise) {
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);
    }
    return stripePromise;
};


export function formatAmountForDisplay(
    amount: number,
    currency: string,
    fractionDigit?: number | undefined
): string {
    let numberFormat = new Intl.NumberFormat(['en-US'], {
        style: 'currency',
        currency: currency,
        currencyDisplay: 'symbol',
        maximumFractionDigits: fractionDigit || 0
    })
    return numberFormat.format(amount)
}

export function isExpired(dateTimeString: string) {
    const dateTime = new Date(dateTimeString);
    const currentDate = new Date();
    return dateTime < currentDate;
}