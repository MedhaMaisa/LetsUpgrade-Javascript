let people = [
    { name: "M", age: 31, country: "India", Hobbies: "KABADDI" }, { name: "c", age: 41, country: "FRANCE", Hobbies: "SKATING" },
    { name: "B", age: 35, country: "US", Hobbies: "CHESS" }, { name: "D", age: 29, country: "India", Hobbies: "HOCKEY" },
    { name: "A", age: 20, country: "NEW ZEALAND", Hobbies: "cricket" }
]
document.write("OBJECTS IN THE ARRAY");
document.write("<br />");
people.forEach(function (a) {
        document.write(JSON.stringify(a));
})
document.write("<br />");

document.write("<br />");
document.write("OBJECTS WITH AGE LESS THAN 30");
document.write("<br />");
people.forEach(function(a)
{
    if (a.hasOwnProperty("age") && a["age"] < 30) {
        document.write(JSON.stringify(a));
    }
})
document.write("<br />");

document.write("<br />");
document.write("OBJECTS WITH COUNTRY INDIA\n");
document.write("<br />");
people.forEach(function (a) {
    if (a.hasOwnProperty("country") && a["country"] == "India") {
        document.write(JSON.stringify(a));
    }
})