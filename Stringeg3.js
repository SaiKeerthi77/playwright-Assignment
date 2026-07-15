function isAnagram(str1,str2){
    str1=str1.split("").sort().join("")//first it will split,then sort and join(array to string )
    str2=str2.split("").sort().join("")
    return(str1===str2)

}

console.log(isAnagram('listen', 'silent'))
console.log(isAnagram('hello', 'world'))
