1、全局安装json-server
    npm install -g json-server

2、创建一个db.json的文件并且在文件中输入以下数据
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}

3、开启json-server
    json-server --watch db.json

4、restApi 接口就是同一个api的url可以做增删改查4种不同的操作