const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export function getCurrentDate(): string {
    const currentDate: Date = new Date();
    const dayName: string = days[currentDate.getDay()];
    const monthName: string = months[currentDate.getMonth()];
    const date: number = currentDate.getDate();
    const year: number = currentDate.getFullYear();

    return `${dayName}, ${monthName} ${date}, ${year}`;
}
