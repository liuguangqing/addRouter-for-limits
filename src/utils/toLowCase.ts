const baseDataType = ['string', 'number', 'boolean'];

/**
 * 将对象的key转换成小写
 * @param data
 */
const toLowCase = (data: any, isLow: boolean = true) => {
    let retData = data;
    console.log('retdata > ', retData)
    if (!data) {
        return '';
    }
    const type = typeof data;

    if (type === 'number' || (type === 'string' && /(^[-0-9][0-9]*(.[0-9]+)?)$/.test(retData.trim()))){
        let ary = retData.toString().split('\.')
        if (ary.length === 1){
            return retData
        }
        if (parseInt(ary[1]) === 0){
            return type === "number" ? parseInt(ary[0]) : ary[0]
        }
    }

    if (baseDataType.includes(type)) {
        return retData;
    }

    if (data.constructor === Array) {
        retData = new Array();
        for (const key of data.keys()) {
            retData[key] = toLowCase(data[key], isLow);
        }
    } else if (data.constructor === Object) {
        const keys = Object.keys(data);
        retData = new Object();
        for (const key of keys) {
            // @ts-ignore
            const trasnsKey = key;
            if (isLow) {
                retData[key.toLocaleLowerCase()] = toLowCase(data[key], isLow);
            } else {
                retData[key.toLocaleUpperCase()] = toLowCase(data[key], isLow);
            }
        }
    }

    return retData;
};


export default toLowCase;
