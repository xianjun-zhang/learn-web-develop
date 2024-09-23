## EXPRESS-AUTH
基于express+mongodb的登陆注册加密验证，涉及bcrypt/jsonwebtoken包的基础使用


## 教程视频
[点击这里观看教程视频](https://www.bilibili.com/video/av49391383/?vd_source=3703b240ee351fea2917407ab83866fc)

## Initialization steps

1. 如果系统还没安装express-generator, 需要安装

    ```sh
    npm install -g express-generator
    ```

2. 创建当前项目文件夹，然后运行以下命令会生成相应项目和package.json

    ```sh
    express .
    ```

3. 安装nodemon 到devDependencies

    ```sh
    npm install --save-dev nodemon
    ```

4. 在package.json中添加

    ```json
    "scripts": {
        "start": "node ./bin/www",
        "devstart": "DEBUG=express-auth:* nodemon -L ./bin/www"
    }
    ```

5. 需要安装VSCode插件测试： rest client 或者 postman. 如果用rest client, 则可参见test.http的写法及使用。如果用postman, 可直接打开插件，然后点击new request, 然后选择get请求，在url中输入http://localhost:3001/，然后点击send按钮发送请求。

6. 运行

    ```sh
    npm run devstart
    ```

    或者测试单个文件

    ```sh
    nodemon app.js
    ```


## 步骤总结
1. 限定用户名唯一

在Schema中添加unique:true, 在options中添加useCreateIndex:true

2. 密码加密

安装bcrypt, 添加set函数进行hashSync(val, 10);加密

3. 用户登陆

如果用户名不存在return res.status(422)

4. 用户存在

利用compare.Sync({密码明文，数据库密文})进行解密

5. 生成token

使用jsonwebtoken包，jwt.sign({id}, SECRET);

生成的token加入到请求头Authorization: Bearer token中

6. 验证token

jwt.verify(token, SECRET)。可以将此步放置到中间件中，通过next()使用于每个接口中。