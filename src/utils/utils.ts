export const toast = (
    title: string,
    duration = 3000,
    mask = false,
    icon = 'none'
) => {
    if (!title) {
        return;
    }
    uni.showToast({
        title,
        duration,
        mask,
        // @ts-ignore
        icon,
    });
};


interface Options {
    type?: string;
    failMsg?: string;
}
/**
 * 通用跳转方法
 * @param url: 跳转链接
 * @param type: 跳转类型，默认跳本小程序
 */
export const commonJump = (url: string, options?: Options) => {
    const {type = 'applet', failMsg} = options || {};
    if (type === 'applet') {
        uni.navigateTo({
            url,
            fail: () => {
                failMsg && toast(failMsg);
            },
        });
    }
};
/**
 * 获取当前页面路径的参数
 */
export const getPageOptions = <T extends {[key: string]: any}> (): T => {
    let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
    let currentPage = routes[routes.length - 1] as {options: object}; // 获取当前页面路由
    let curParam = currentPage.options as T; // 获取路由参数
    return curParam;
};
/**
 * 获取当前页面路径
 */
export const getPagePath = () => {
    let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
    let currentPage = routes[routes.length - 1] as any; // 获取当前页面路由
    return currentPage.route; // 获取路由参数
};




export const Utils = {
    toast,
    commonJump,
    getPageOptions,
    getPagePath,
};
