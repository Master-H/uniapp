let Koa = require('koa2');
let Router = require('koa-router');
let cors = require('koa-cors');
let fs = require('fs');
const path = require('path');

let Mock = require('mockjs'); // 引入mockjs
const Random = Mock.Random;

const app = new Koa();
const router = new Router();

router.get('/test', async ctx => {
    // 允许cors跨域请求
    await cors();
    const jsonPath = path.resolve(__dirname, './static/test.json');
    // ctx.body = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    // ctx.body = await Mock.mock({
    //     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    //     'arr|1-3': [{
    //         // 属性 id 是一个自增数，起始值为 1，每次增 1
    //         'id|+1': 1,
    //         'author|+1': Random.cname(),
    //         'img': Random.image('100x100'),
    //         'title': Random.csentence(5, 9),
    //     }],
    // });
    ctx.body = {
        data: 1,
    };
});

// 将koa和中间件连起来
app.use(router.routes()).use(router.allowedMethods());

let port = 3000;
app.listen(port, () => {
    console.log('server is running on' + port);
});


