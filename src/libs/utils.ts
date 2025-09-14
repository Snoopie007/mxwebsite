import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Time } from '@internationalized/date';

export function stringToTime(time: string) {
    return new Time(parseInt(time.split(":")[0]), parseInt(time.split(":")[1]));
}


export const StripeCardOptions = {
  style: {
      base: {
          fontWeight: "500",
          fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
          fontSize: "14px",
          fontSmoothing: "antialiased",
      },
      invalid: {
          iconColor: "#fd0034",
          color: "#fd0034",
      },
  },
};



 const formatAmountForDisplay = (
	amount: number,
	currency: string,
	withSymbol = true,
	minimumFractionDigits = 0
): string => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: withSymbol ? 'currency' : 'decimal',
		currency,
		minimumFractionDigits,
	});
	
	return formatter.format(amount);
}


function cn(...inputs: ClassValue[]) {
  	return twMerge(clsx(inputs));
}
function sleep(ms: number) {
  	return new Promise((resolve) => setTimeout(resolve, ms));
}




async function tryCatch<T, E = Error>(
    promise: Promise<T>
): Promise<{ error: E | null; result: T | null }> {
    try {
        const result = await promise;

        return { error: null, result };
    } catch (error) {
        return { error: error as E, result: null };
    }

}

function formatTime(timeString: string | undefined): string {
	if (!timeString) return '';

	const [hours, minutes] = timeString.split(':').map(Number);
	const period = hours >= 12 ? 'PM' : 'AM';

	const displayHours = hours % 12 || 12;

	return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
}


function formatEmail(email: string) {
	if (!email) return '';
	const [username, domain] = email.split('@') || [];
	return `${username?.substring(0, 2)}${'*'.repeat(username?.length - 2)}@${domain}`;
  }
  
function formatPhone(phone: string) {
	if (!phone) return '';
	const lastThreeDigits = phone.slice(-4);
	return `${'*'.repeat(phone.length - 4)}${lastThreeDigits}`;
}


export {
	sleep,
	tryCatch,
	formatAmountForDisplay,
  	cn,	
	formatTime,
	formatEmail,
	formatPhone,
}


// export const zPhone = z.string().transform((arg, ctx) => {
//   const phone = parsePhoneNumberFromString(arg, {
//     // set this to use a default country when the phone number omits country code
//     defaultCountry: 'US',
    
//     // set to false to require that the whole string is exactly a phone number,
//     // otherwise, it will search for a phone number anywhere within the string
//     extract: false,
//   });

//   // when it's good
//   if (phone && phone.isValid()) {
//     return phone.number;
//   }

//   // when it's not
//   ctx.addIssue({
//     code: z.ZodIssueCode.custom,
//     message: 'Invalid phone number',
//   });
//   return z.NEVER;
// });