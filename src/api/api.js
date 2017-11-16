import axios from 'axios';
let base = 'http://dingzhi.diyuapp.com/freeweb';
export const requestLogin = params => {
     return axios.post(`${base}/api/login`, params).then(res => res.data);
     };

export const yzimage = params => {
    return axios.get(`${base}/api/yzimage?uuid=NyM66J3xB5qGY7HQ&m=0.019600493055879742`, params).then(res => res.data);
    };
/*密码加密*/
let olduuid = ""; 
let RSAkey = "";
export function RSA(password,uuid) {
  if(olduuid != uuid && uuid){
			var publicKeyExponent, publicKeyModulus;
            params={
                uuid:uuid
            }
             axios.post(`${base}/api/getPublicKey`, params).then(
                 res => {
                    data = JSON.parse(res.data);
					publicKeyExponent = data.publicKeyExponent;
					publicKeyModulus = data.publicKeyModulus;
                 });
			RSAUtils.setMaxDigits(200);
			RSAkey = new RSAUtils.getKeyPair(publicKeyExponent, "", publicKeyModulus);
			olduuid = uuid;
		}
		return RSAUtils.encryptedString(RSAkey, password);
}

