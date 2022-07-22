let generator = document.getElementById("generatorBtn").onclick = function(){
    function code(){
        a = String(Math.floor(Math.random()*3+1))
        b = String(Math.floor(Math.random()*9+1))
        c = String(Math.floor(Math.random()*9+1))
        d = String(Math.floor(Math.random()*9+1))
        e = String(Math.floor(Math.random()*9+1))
        f = String(Math.floor(Math.random()*9+1))
        nhentaiCode = "https://nhentai.net/g/"+a+b+c+d+e+f

        document.getElementById("displayCode").innerHTML = nhentaiCode
        document.getElementById("displayCode").href = nhentaiCode
    }
    code()
}