const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function getCurrentDate() {
    const currentDate: Date = new Date();
    const dayName: string = days[currentDate.getDay()];
    const monthName: string = months[currentDate.getMonth()];
    const date: number = currentDate.getDate();
    const year: number = currentDate.getFullYear();

    return `${dayName}, ${monthName} ${date}, ${year}`;
}

export function apiFormatOfDate() {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hour = currentDate.getHours();

    return `${year}-${month}-${day}T${hour}:00`;
}
