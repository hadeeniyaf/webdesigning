let char =
{
    fname: "hadee",
    age: 19,
    gender: "male",
    place: "Kerala",
    Cars: {
        car1:"BMW",
        car2:"Mercedes"
}
}
for (i in char.Cars){
    console.log(char.Cars[i])
}