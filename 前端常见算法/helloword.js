const reversestr = (str) => {
    const tempArr = str.split(' ')
    for (let i = 0; i < tempArr.length; i++) {
        const newstr = tempArr[i].replace(tempArr[i][0], tempArr[i][0].toUpperCase())
        const distArr = newstr.split('').reverse().join('')
        tempArr[i] = distArr
    }
    return tempArr.reverse().join(' ')
}
console.log(reversestr('hello world'))