//Q1
function is_array(input) {
    if (input.constructor === Array) {
        return true;
    }
    return false;
}

console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));




//Q2
array_Clone = function(arra1) {
    return arra1.slice(0);
       };
   console.log(array_Clone([1, 2, 4, 0]));
   console.log(array_Clone([1, 2, [4, 0]]));




//Q3
//Q4
joinArr( ["Red", "Green", "White", "Black"])
function joinArr(arr) {
    var i = 1;
    while (i) {
        console.log(arr.join(","));
        console.log(arr.join("-"));
        console.log(arr.join("+"));
        console.log(arr.join("*"));

        i -= 1;
    }
}




//Q5
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;
