// JSON.stringify:有三个参数,第一个参数数组或者类等、第二个参数是对内容进行处理，第三个参数是设置缩进的值

let data2 = {name:'xxGw'}
let str1 = JSON.stringify(data2)
console.log("str:",str1)
//str: {"name":"xxGw"}

//第一个参数为对象，解析字符串中的key和value组成的字符串
let student = Object.create(null)
student.name = 'xxGw'
student.age = 23
student.city = 'nanchang'
let str2 = JSON.stringify(student)
console.log("str:",str2)
//str: {"name":"xxGw","age":23,"city":"nanchang"}

//第一个参数为数组，第二个参数为function，则可以返回符合要求的字符串
let homeMember = []
homeMember[0] = 'grandfather'
homeMember[1] = 'grandmother'
homeMember[2] = 'father'
homeMember[3] = 'mother'
homeMember[4] = 'sister'
homeMember[5] = 'me'
console.log("homeMember:",homeMember)
let str3 = JSON.stringify(homeMember,(k,v)=>v.toString().toUpperCase())
console.log("str3:",str3)
//str3: "GRANDFATHER,GRANDMOTHER,FATHER,MOTHER,SISTER,ME"

//第一个参数为对象，第二个参数为数组，将数组中的值作为key并且匹配对象中的key和value，返回字符串
let arr = ['name','age','gender']
let str4 = JSON.stringify(student,arr)
console.log("str4:",str4)
//str4: {"name":"xxGw","age":23}

//第一个参数为对象，第二个参数为数组，第三个参数为数组，代表缩进的空间
let str5 = JSON.stringify(student,arr,500)
console.log(str5)
/*
{
          "name": "xxGw",
          "age": 23
}
*/

//第一个参数为对象，第二个参数为数组，第三个参数为转义字符
let str6 = JSON.stringify(student,arr,'\t')
console.log(str6)
/*
{
	"name": "xxGw",
	"age": 23
}
*/

//第一个参数为对象，第二个参数为数组，第三个参数为字符串
let str7 = JSON.stringify(student,arr,'😔')
console.log(str7)
/*
{
😔"name": "xxGw",
😔"age": 23
}
*/