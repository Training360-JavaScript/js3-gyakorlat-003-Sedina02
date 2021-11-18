'use strict';

const setCookie = (string) => {
    const now = new Date();
    now.setTime(now.getTime() + (15 * 60* 1000));
    const expires = now.toUTCString();
    document.cookie = `token=${string}; expires=${expires}; path=/`;
};

export default setCookie;
