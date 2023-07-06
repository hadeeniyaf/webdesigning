let nos= [1, 2, 8, 4, 7, 6, 7];
var m= 0;
nos.map(
    function(n)
    {
        if (m<n)
        {
            m=n
        }
    }
)
console.log("largest number: ",m);