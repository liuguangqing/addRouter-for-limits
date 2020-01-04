const isDev: boolean = process.env.NODE_ENV === 'development';

const Config: any = {
    withCredentials: isDev,  // 跨域
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded', // 响应报文
    }
}

export default Config
