const obj = [
    {id: 1, title: "Вася"},
    {id: 2, title: "Петя"},
    {id: 1, title: "Вася"},
]

let nums = obj.map(e => e.id)
let set = new Set(nums);
const a = obj.map(e => {
    if(set.has(e.id)){
        set.delete(e.id)
        return e
    }
}).filter(e => e != undefined)
console.log(a);