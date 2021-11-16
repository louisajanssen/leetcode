function preprocessDate(dates) {
    // Write your code here
    let m = {
        "Jan": "01",
        "Feb": "02",
        "Mar": "03",
        "Apr": "04",
        "May": "05",
        "Jun": "06",
        "Jul": "07",
        "Aug": "08",
        "Sep": "09",
        "Oct": "10",
        "Nov": "11",
        "Dec": "12",
    }
    let year;
    let month; 
    let day;
    
    let dateArray = []
    
    for (let i = 0; i < dates.length; i++) {
        let date = dates[i].split(" ")
    
        year = date[2]
        month = date[1]
        month = m[month]
        day = getDay(date[0])
        
        let finalDate = year + "-" + month + "-" + day
        dateArray.push(finalDate)
    }
    
    return dateArray

}

function getDay(day) {
    
    if (day.length === 3) {
        return "0" + day[0]
    }
    
    return day[0] + day[1]
}

const test1 = preprocessDate('13th Jan 1906', '20th Aug 1996', '10th Mar 1998', '14th Jul 1990')
console.log(test1)