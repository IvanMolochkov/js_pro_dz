const successfulAge = (date) => {
    const now = new Date(); 
    const nowMonth = new Date(0, now.getMonth(), now.getDate()); 
    const birthday = new Date(date); 
    const birthdayMonth = new Date(0, birthday.getMonth(), birthday.getDate()); 
    let age = now.getFullYear() - birthday.getFullYear();
    if (nowMonth < birthdayMonth) {
      age--;
    }
    if (age >= 18){
        return true
    } else {
        return false
    }
}

console.log(successfulAge("2006/10/12"));