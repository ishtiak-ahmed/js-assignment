// Convert kilometer to merter.
// Handle error for bonus
function kilometerToMeter(kilometer) {
    if (typeof kilometer != 'number' || kilometer < 0) {
        return "Please enter valid distance."
    }
    return kilometer * 1000;
}

// Budget Calculator
// watch $50, mobile $100, Laptop $500
function budgetCalculator(watch, phone, laptop) {
    if (typeof watch != 'number' || watch < 0) {
        return "Enter valid number."
    }
    if (typeof phone != 'number' || phone < 0) {
        return "Enter valid number."
    }
    if (typeof laptop != 'number' || laptop < 0) {
        return "Enter valid number."
    }
    return watch * 50 + phone * 100 + laptop * 500;
}

// Hotel Cost
/* day 1-10, 100 per day,
   day 11-20, 80 per day
   day 21-, 50 per day */
function hotelCost(days) {
    if (typeof days != 'number' || days < 0) {
        return "Please enter valid days number.."
    }
    if (days <= 10) {
        return days * 100;
    }
    if (days <= 20) {
        return 10 * 100 + (days - 10) * 80;
    }
    else {
        return 10 * 100 + 10 * 80 + (days - 20) * 50;
    }
}


// mega friend, take names collection as array
// return the longest name
function megaFriend(names) {
    if (names.length == 0) {
        return "Please enter a valid array."
    }
    let longest = names[0];
    for (let i = 0; i < names.length; i++) {
        if (names[i].length > longest.length) {
            longest = names[i];
        }
    }
    return longest;
}


// console.log(kilometerToMeter(-5))

// console.log(budgetCalculator(4, -2, 5))

// console.log(hotelCost(31));

// let sweetNames = ['Jane', "Leena", 'Hermione', 'Georgina', 'Emma']

// console.log(megaFriend(sweetNames))