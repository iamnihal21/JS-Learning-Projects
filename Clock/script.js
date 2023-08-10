const update = function (e) {
    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();
    let arr = [1,2,3,4,5,6,7,8,9]
    if (s == 0 || m == 0 || h == 0) {s = s+1;m = m+1;h = h+1;}
    if (s >= 1 && s <= 9){s = '0' + s;}
    if(m >= 1 && m <= 9 ){m = '0' + m;}
    if (h >= 1 && h <= 9) {h = '0' + h;}
    clk.innerHTML = `<p>${h} &nbsp; : &nbsp; ${m}  &nbsp; : &nbsp; ${s}</p>`
    setInterval(update,1000)
}
mBtn.addEventListener('click',update)
