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
        function updateShadowColor() {
            const clockBox = document.getElementById('clock-box');
            const now = new Date();
            const seconds = now.getSeconds();
            const hue = (seconds / 60) * 360; // Convert seconds to hue (0-360)

            const shadowColor = `hsl(${hue}, 100%, 50%)`;
            clockBox.style.boxShadow = `0px 0px 30px ${shadowColor}`;
        }

        // Update the shadow color every second
        setInterval(updateShadowColor, 100);
