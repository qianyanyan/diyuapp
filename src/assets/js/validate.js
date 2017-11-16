/* 是否邮箱*/
export function isTell(str) {
  const reg =/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
  return reg.test(str.trim());
}
/* 合法密码*/
export function isPassword(textval) {
  const urlregex =/^(\w){6,16}$/;
  return urlregex.test(textval);
}
/* 合法验证码*/
export function isCode(textval) {
  const urlregex =/^(\w){4}$/;
  return urlregex.test(textval);
}
// /*密码加密*/
// let olduuid = ""; 
// let RSAkey = "";
// export function RSA(password,uuid) {
//   if(olduuid != uuid && uuid){
// 			var publicKeyExponent, publicKeyModulus;
// 			$.ajax({ //这里需要ajax同步
// 				type: 'POST',
// 				async: false,
// 				url: config.url + 'api/getPublicKey',
// 				data: {
// 					uuid: uuid
// 				},
// 				success: function(data) {
// 					data = JSON.parse(data);
// 					publicKeyExponent = data.publicKeyExponent;
// 					publicKeyModulus = data.publicKeyModulus;
		
// 				},
// 				dataType: 'json'
// 			});
// 			RSAUtils.setMaxDigits(200);
// 			RSAkey = new RSAUtils.getKeyPair(publicKeyExponent, "", publicKeyModulus);
// 			olduuid = uuid;
// 		}
// 		return RSAUtils.encryptedString(RSAkey, password);
// }
