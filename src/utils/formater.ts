import dayjs from "dayjs";
import "dayjs/locale/fa";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export const formatPrice = (price: number | string | null | undefined) => {
  if (!price) return "0";
  return new Intl.NumberFormat("fa-IR").format(Number(price));
};

export const formatDate = (date: Date | string) => {
  if (!date) return "-";
  return new Intl.DateTimeFormat("fa-IR-u-nu-latn", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date(date));
};

export const formatTime = (date: Date | string) => {
  if (!date) return "-";

  const currentDate = new Date(date);
  const hours = currentDate.getHours(); // Extracts the hours component (0-23)
  const minutes = currentDate.getMinutes(); // Extracts the minutes component (0-59)
  // const seconds = currentDate.getSeconds(); // Extracts the seconds component (0-59)

  const time = `${hours}:${minutes}`; // Formats the time string

  return time;
};

export const getGoldPrice = () => {
  const min = 33000000;
  const max = 36000000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const convertNumberToPersian = (number: number): string => {
  const persianDigits: string[] = [
    "",
    "یک",
    "دو",
    "سه",
    "چهار",
    "پنج",
    "شش",
    "هفت",
    "هشت",
    "نه",
  ];
  const persianTens: string[] = [
    "ده",
    "بیست",
    "سی",
    "چهل",
    "پنجاه",
    "شصت",
    "هفتاد",
    "هشتاد",
    "نود",
  ];
  const persianHundreds: string[] = [
    "صد",
    "دویست",
    "سیصد",
    "چهارصد",
    "پانصد",
    "ششصد",
    "هفتصد",
    "هشتصد",
    "نهصد",
  ];

  if (number < 10) {
    return persianDigits[number];
  } else if (number < 20) {
    return "ده " + persianDigits[number - 10];
  } else if (number < 100) {
    const tensDigit = Math.floor(number / 10);
    const onesDigit = number % 10;
    let result = persianTens[tensDigit - 1];

    if (onesDigit !== 0) {
      result += " و " + persianDigits[onesDigit];
    }

    return result;
  } else {
    const hundredsDigit = Math.floor(number / 100);
    const tensDigit = Math.floor((number % 100) / 10);
    const onesDigit = number % 10;
    let result = persianHundreds[hundredsDigit - 1];

    if (tensDigit !== 0) {
      result += " و " + persianTens[tensDigit - 1];
    }

    if (onesDigit !== 0) {
      result += " و " + persianDigits[onesDigit];
    }

    return result;
  }
};

export const convertToPersianCurrency = (number: number | null): string => {
  console.log("number: ", number);
  if (!number) return "";
  const persianDigits: string[] = [
    "صفر",
    "یک",
    "دو",
    "سه",
    "چهار",
    "پنج",
    "شش",
    "هفت",
    "هشت",
    "نه",
  ];
  const persianUnits: string[] = [
    "",
    "هزار",
    "میلیون",
    "میلیارد",
    "تریلیون",
    "کوادریلیون",
    "کوینتیلیون",
    "سکستیلیون",
    "سپتیلیون",
    "اکتیلیون",
    "نانیلیون",
    "دسیلیون",
  ];

  if (number === 0) {
    return persianDigits[0] + " " + persianUnits[0];
  }

  let result = "";
  let index = 0;

  while (number > 0) {
    const remainder = number % 1000;

    if (remainder !== 0) {
      const persianNumber = convertNumberToPersian(remainder);
      const unit = persianUnits[index];

      if (result !== "") {
        result = " و " + result;
      }

      result = persianNumber + " " + unit + result;
    }

    number = Math.floor(number / 1000);
    index++;
  }

  return result + " ";
};

export const persianToEnglish = (persianNumber: string): string => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const englishDigits = "0123456789";
  return persianNumber
    .replace(/[۰-۹]/g, (digit) => englishDigits[persianDigits.indexOf(digit)])
    .replace(/,/g, "");
};

export const englishToPersian = (englishNumber: string): string => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const englishDigits = "0123456789";
  return englishNumber
    .replace(/[0-9]/g, (digit) => persianDigits[englishDigits.indexOf(digit)])
    .replace(/,/g, "");
};

export const numberInputPersianNumberFormatter = (
  value: number | undefined
) => {
  if (!value) return "";
  return englishToPersian(value.toString());
};

export const numberInputPersianNumberParser = (
  displayValue: string | undefined
): number => {
  if (!displayValue) return NaN;
  const englishValue = persianToEnglish(displayValue);
  const parsedValue = parseInt(englishValue, 10);
  return isNaN(parsedValue) ? NaN : parsedValue;
};

export const numberInputPersianNumberPriceFormatter = (
  value: number | undefined
) => {
  if (!value) return "";
  const englishValue = persianToEnglish(value.toString());

  return `${englishValue}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const numberInputPersianNumberPriceParser = (
  displayValue: string | undefined
): any => {
  if (!displayValue) return "";
  const englishValue = persianToEnglish(displayValue);
  const parsedValue = parseInt(englishValue, 10);
  const finalEnglishValue = isNaN(parsedValue) ? NaN : parsedValue;
  return `${finalEnglishValue}`.replace(/\$\s?|(,*)/g, "");
};
