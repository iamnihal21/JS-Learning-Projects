class setItemsArr {
    setFun() {
        let ch = "";
        for (var i = 97; i <= 122; i++) {
            ch += (String.fromCharCode(i));
        }
        for (var j = 65; j <= 90; j++) {
            ch += (String.fromCharCode(j));
        }
        localStorage.setItem("Characters", ch);
        let a = localStorage.getItem("Characters");
        return a;
    }
}

class password extends setItemsArr {
    constructor() {
        super();
        this.defaultA = this.setFun(); 
        this.a = this.defaultA;
    }

    easy(len) {
        let ps = "";
        for (var i = 0; i < len; i++) {
            var randomIndex = Math.floor(Math.random() * this.a.length);
            ps += this.a.charAt(randomIndex);
        }
        let res = document.getElementById('ps');
        res.innerHTML = ps;
        this.a = this.defaultA;
    }

    modrate(len) {
        let ps = "";
        this.a += "123456789";
        for (var i = 0; i < len; i++) {
            var randomIndex = Math.floor(Math.random() * this.a.length);
            ps += this.a.charAt(randomIndex);
        }
        let res = document.getElementById('ps');
        res.innerHTML = ps;
    }

    strong(len) {
        let ps = "";
        this.a += "!@#$&_+-*,.`~";
        for (var i = 0; i < len; i++) {
            var randomIndex = Math.floor(Math.random() * this.a.length);
            ps += this.a.charAt(randomIndex);
        }
        let res = document.getElementById('ps');
        res.innerHTML = ps;
    }
    copyPassword() {
        let res = document.getElementById('ps');
        if (res.textContent !== "" && res.textContent !== "Lorem ipsum dolor sit amet." && res.textContent !== "Copied to clipboard") {
            let p = document.createElement('textarea');
            p.value = res.textContent;
            document.body.appendChild(p);
            p.select();
            document.body.removeChild(p);
            res.textContent = 'Copied to clipboard'; 
        }
        else if(res.textContent === "Lorem ipsum dolor sit amet.") {
                res.textContent = 'Please Generate Password First !!'; 
        }
        else if(res.textContent === "Copied to clipboard") {
                res.textContent = 'Please Regenerate Password !!'; 
        }
        else{
            res.textContent = 'No password to copy'; 
        }
    }
}

let pwd = new password();

fun.addEventListener('click', function() {
    pwd.easy(10);
});
mod.addEventListener('click', function() {
    pwd.modrate(10);
});
hard.addEventListener('click', function() {
    pwd.strong(10);
});
cpy.addEventListener('click', function() {
    pwd.copyPassword();
});
