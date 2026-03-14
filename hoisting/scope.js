var a = 45
let b = 65
const c = 75

// console.log(a, b, c)

{
    //block of scope >> local scope
    let x = 450
    // console.log(x)
    // console.log(c)
    // console.log(a + b + x)
}
// console.log(a + b + c)
// console.log(a+b+x) x is not defined

//------------------------------------------------------

var t1 = 100
let f1 = 200
const x1 = 300

console.log(t1, t2, t3, t4)
console.log(f1, f2, f3, f4)
console.log(x1, x2, x3, x4)

{
    var t2 = 101
    let f2 = 201
    const x2 = 301

    console.log(t1, t2, t3, t4)
    console.log(f1, f2, f3, f4)
    console.log(x1, x2, x3, x4)
    {
        var t3 = 102
        let f3 = 202
        const x3 = 302

        console.log(t1, t2, t3, t4)
        console.log(f1, f2, f3, f4)
        console.log(x1, x2, x3, x4)
        {
            var t4 = 103
            let f4 = 203
            const x4 = 303

            console.log(t1, t2, t3, t4)
            console.log(f1, f2, f3, f4)
            console.log(x1, x2, x3, x4)

        }
    }
}

console.log(t1, t2, t3, t4);
console.log(f1, f2, f3, f4);
console.log(x1, x2, x3, x4);