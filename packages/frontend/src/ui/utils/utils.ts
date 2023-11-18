import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);
dayjs.extend(relativeTime);

export const utils = {
  copyToClipboard(textToCopy: string) {
    // Create a temporary input element
    const tempInput = document.createElement("input");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    // Select the text in the input element
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    document.execCommand("copy");

    document.body.removeChild(tempInput);
  },
  shortAddress(address: string, length?: number): string {
    if (!length) length = 4;
    if (!address) return "...";
    return (
      String(address).substring(0, length) +
      "..." +
      String(address).substring(address.length - length)
    );
  },
  amountShortValue(value: number) {
    const length = String(value).length;
    if (length > 3 && length <= 6) {
      return Math.round(value / 1000) + "K";
    } else if (length > 6 && length <= 9) {
      return Math.round(value / 10 ** 6) + "M";
    } else if (length > 9) {
      return Math.round(value / 10 ** 9) + "B";
    } else return value;
  },
  currentTimestamp(millisecond: boolean = true) {
    const date = dayjs();
    if (millisecond) {
      return date.valueOf();
    }
    return date.unix();
  },
  timeAge(timeStamp: number) {
    return dayjs(timeStamp).fromNow();
  },
  referenceData(timestamp: number) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const refDate = new Date(timestamp);
    if (year === refDate.getFullYear() && month === refDate.getMonth()) {
      const hours = refDate.getHours();
      return `${String(hours > 12 ? hours - 12 : hours).padStart(
        2,
        "0"
      )}:${refDate.getMinutes().toString().padStart(2, "0")} ${
        hours > 12 ? "PM" : "AM"
      }`;
    } else if (year === refDate.getFullYear()) {
      return refDate.getMonth() + 1;
    }
    return `${refDate.toLocaleDateString()} ${refDate.toLocaleTimeString()}`;
  },
  timeLeft(futureTimestamp: number) {
    const currentTimestamp = dayjs().valueOf(); // Current timestamp in milliseconds
    const timeLeft = dayjs.duration(futureTimestamp - currentTimestamp);

    const days = timeLeft.days();
    const hours = timeLeft.hours();
    const minutes = timeLeft.minutes();

    if (days) return `${days} days`;
    else if (!hours) return `${hours} hours`;
    else return `${minutes} minutes`;
  },
};
