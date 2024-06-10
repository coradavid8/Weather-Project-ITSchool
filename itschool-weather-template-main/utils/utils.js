function getDayOfWeekName (dt) {
    var dateObj = new Date (dt * 1000);
    var dayIndex = dateObj.getDay();
    switch (dayIndex) {
        case 0 :
            return "Duminica" ;
        case 1 :
            return "Luni" ;
        case 2 :
            return "Marti" ;
        case 3 :
            return "Miercuri" ;
        case 4 :
            return "Joi" ;
        case 5 :
            return "Vineri" ;
        case 6 :
            return "Sambata" ;
        default :
            throw "Nu exista"
    }

}

function getDisplayTime(dt) {
    var dateObj = new Date(dt * 1000);  // Corrected to use seconds
    var hour = dateObj.getHours();
    var minutes = dateObj.getMinutes();
    var displayHour = hour < 10 ? "0" + hour : hour;
    var displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    return `${displayHour}:${displayMinutes}`;
}
