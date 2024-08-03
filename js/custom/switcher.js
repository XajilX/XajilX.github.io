function switcher(sOnPC,sOnMob) {
    var flag = (document.documentElement.clientWidth > 1080);
    if(flag)    return sOnPC;
    else        return sOnMob;
}

