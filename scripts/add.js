/**
 * @file 创建页面模板
 * @date 2022-11-10
 */

const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

// 页面path列表
const pageListPath = path.resolve(__dirname, '../src/pages.json');


/**
  * 函数名规范校验
  *
  * @return {boolean} 终止函数
  */
const checkFnName = () => name => {
    const err1 = name.includes('pages');
    const err2 = /^\//.test(name);
    const err3 = name.includes('.vue');
    if (err1 || err2 || err3) {
        return chalk.red('格式出错,正确示例：pages/shop/cloths/index，输入 shop/clothes即可');
    }
    return true;
};


module.exports = {
    prompts: [
        {
            type: 'input',
            name: 'path',
            message: `${chalk.yellow('🚀 请输新建页面path')} （示例 pages/shop/cloths/index，输入 shop/clothes即可`,
            validate: checkFnName('name'),
        },
        {
            type: 'input',
            name: 'barTitle',
            message: `${chalk.yellow('🚀 请输入页面标题')}`,
        },
    ],
    actions: ({path, barTitle}) => {
        const actions = [];
        actions.push({
            type: 'add',
            path: `src/pages/${path}/index.vue`,
            templateFile: 'scripts/template/vue.page.hbs',
        });

        // 读取现有函数名单
        const config = JSON.parse(fs.readFileSync(pageListPath, 'utf-8'));
        config.pages.push({
            path: `pages/${path}/index`,
            style: {
                'backgroundColor': '#fff',
                'navigationBarTitleText': barTitle,
            },
        });
        fs.writeFileSync(
            pageListPath,
            JSON.stringify(config, null, '\t'),
            'utf-8'
        );

        return actions;

    },
};

