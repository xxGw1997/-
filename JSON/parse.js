//将一个JSON字符串 解析为一个对象或者数组
let data1 = '{"name":"xxGw"}'
let json1 = JSON.parse(data1)
console.log("json:",json1)

let jsonText = '{"firstName":"yang","lastName":"wenxuan","gender":"male","age":"23","hobby":["games","movie"]}'
let profile = JSON.parse(jsonText);
console.log(profile.firstName)//yang
console.log(profile.age)//23
console.log(profile.hobby instanceof Array)//true

//第一个参数是JSON字符串，第二个参数为function,可对返回对象进行操作
let newProfile = JSON.parse(jsonText,test)
console.log(newProfile)
