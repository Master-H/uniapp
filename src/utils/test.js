uni.request({
    url: url, // 仅为示例，并非真实接口地址。
    data: {
        name: 'demo',
    },
    method: 'GET',
    header: {
        'custom-header': 'demo', // 自定义请求头信息
    },
    success: res => {
        console.log(res.data);
    },
});
uni.request({
    url: 'https://www.example.com/request', // 仅为示例，并非真实接口地址。
    data: {
        name: 'demo',
    },
    header: {
        'custom-header': 'demo', // 自定义请求头信息
    },
    success: res => {
        console.log(res.data);
    },
});

export const requestGet = url => {
    const token = uni.getStorageSync('token');
    uni.request({
        url: url, // 仅为示例，并非真实接口地址。
        data: {
            name: 'demo',
        },
        method: 'GET',
        header: {
            token: token, // 自定义请求头信息
        },
        success: res => {
            console.log(res.data);
        },
    });
};
function getData(url) {
    requestGet(url);
}

const handleSuccess = (response) => {
    const {statusCode,code} = response.statusCode;
    if (statusCode === 200 && code === 0) {
        // do something
    }else {
        // do something
    }
}

export const requestGet = url => {

    // 统一获取token
    const token = uni.getStorageSync('token');

    uni.request({
        url: url, // 仅为示例，并非真实接口地址。
        data: {
            name: 'demo',
        },
        method: 'GET',
        header: {
            token: token, // 自定义请求头信息
        },
        success: handleSuccess,
    });
};

// 只需要传入url
function getData(url) {
    requestGet(url);
}