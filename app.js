function Information(name, fatherName, city, email) {
    this.name = name;
    this.fatherName = fatherName;
    this.city = city;
    this.email = email;
}

Information.prototype.Add = function () {
    var arr = []
    var obj = {
        Name: this.name,
        FatherName: this.fatherName,
        City: this.city,
        Email: this.email,
    }
    arr.push(obj);
    console.log(arr);
}

var information1 = new Information("Farhan", "Rafiq", "Karachi", "Mfarhanahmed40@gmail.com");
information1.Add();

var information2 = new Information("Mohsin", "Munaf", "Lahore", "justcallmohsin@gmail.com");
information2.Add();

var information3 = new Information("Haris", "Aziz", "Multan", "HarisAziz@gmail.com");
information3.Add();

