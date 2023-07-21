let person=
{
    Fname: "Hadee",
    Lname: "Niyaf",
    flname: function()
    {
        return this.Fname+" "+this.Lname;
    }
}
console.log(person.flname())