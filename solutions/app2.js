'use strict';

const setCookie = (string) => {
    const now = new Date();
    now.setTime(now.getTime() + (15 * 60* 1000));
    const expires = now.toUTCString();
    document.cookie = `token=${string}; expires=${expires}; path=/`;
};

setCookie('viewed','5')
setCookie('uid','354774631237')
setCookie('ssid','Bx55OWbHJ0Vt_IGIF')

const cookieHandler = {
  getAll(){
    const nameValuePairs = document.cookie.split('; ').map(item => item.split('='))
        let cookieObj = {}
        nameValuePairs.forEach(item => {
            let key = item[0];
            let value = item[1];
            cookieObj[key] = value;
        } )
    return cookieObj
  },

  toSessionStorage(){
    const cookies = cookieHandler.getAll();
    Object.keys(cookies)
    .map(key=> sessionStorage
    .setItem(key,cookies[key]));
  },

  flush(){
    const cookies = cookieHandler.getAll();
        Object.keys(cookies)
        .map(key=> document.cookie=`${key}=; expires = Thu 01 Jan 1970 00:00:00 UTC; path = /`);
  }
}

export { cookieHandler };
