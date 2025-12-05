const VALKS_MONTHS = [
    "January", "February", "March", "April", 
    "May", "June", "July", "August", "September", 
    "Ovtober", "November", "December", "Neotember"
];

const VALKS_DAYS = ["Monday", "Tuesday", "Wednesday", 
    "Thursday", "Friday", "Saturday", "Sunday"];

const VALKS_HOLIDAYS = {
    'January 18' : '18th DAY!',
    'March 15' : 'March 15th!!',
    'April 22' : 'APRIL FOOLS DAY!',
    'June 10' : 'June 10th',
    'July 18' : 'Birthday!',
    'September 24' : 'September 24th',
    'Valks Day' : 'Day 365 inbetween year day!'
};

//Gregorian month cumlative days (non-leap base)
const CUM_DAYS_GREG = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

let BIRTHDAY_YEAR_START = new Date(1914, 7, 18);

function gregorianToValks(gYear, gMonth, gDay) {
    // Calculate day of year with leap adjustment
    let doy = CUM_DAYS_GREG[gMonth - 1] + gDay;
    const isLeap = (gYear % 4 === 0 && (gYear % 100 !== 0 || gYear % 400 === 0)) && gMonth > 2;
    if (isLeap) doy += 1;

    // Valks: 364 days in 13 months; 365th standalone
    let tMonth, tDay, tWeekday, era, yearOffset;
    if (doy > 364) {
        //Valks Day
        era = gYear >= 1914 ? 'AR' : 'BR';
        yearOffset = era === 'BR' ? Math.abs(gYear - 1914) : gYear - 1913;
        return `Valks Day, Year ${yearOffset} ${era}`;
    }

    //Months and Days in Valks Calendar
    const tMonthIdx = Math.floor((doy - 1) / 28);
    tMonth = VALKS_MONTHS[tMonthIdx];
    tDay = ((doy - 1) % 28) + 1;
    
    //Weekday Calculation
    const gDate = new Date(gYear, gMonth - 1, gDay);
    const gWeekday = gDate.getDay(); // 0 (Sun) to 6 (Sat)
    tWeekday = VALKS_DAYS[(gWeekday + 6) % 7]; // Adjust to Mon-Sun

    //Era and Year Offset
    era = gYear >= 1914 ? 'AR' : 'BR';
    yearOffset = era === 'BR' ? Math.abs(gYear - 1914) : gYear - 1913;

    return  `${tMonth} ${tDay} ${tWeekday}, Year ${yearOffset} ${era}`;

}

console.log(gregorianToValks(1915, 12, 31)); // Example usage
