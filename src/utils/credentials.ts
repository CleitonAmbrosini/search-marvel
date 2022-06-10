import md5 from 'md5';

const ts = 1643414202;
const apikey = '1df6d5cb1576a290e4e0839e2f30fd6f';
const privateKey = 'b6425214fac51782a9fdc9675a4b964175cfa099';
const hash = md5(ts + privateKey + apikey);

const credentials = `ts=${ts}&apikey=${apikey}&hash=${hash}`;

export { credentials, ts, apikey, hash };
