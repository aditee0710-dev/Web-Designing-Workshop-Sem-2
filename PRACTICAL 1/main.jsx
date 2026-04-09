function Calc() {
    let p = document.getElementById("p").value;
    let r = document.getElementById("r").value;
    let t = document.getElementById("t").value;

    if (p === "" || r === "" || t === "") {
        document.getElementById("ans").innerHTML = "Fill";
        return;
    }

    let si = (p * r * t) / 100;

    document.getElementById("ans").innerHTML = "SI = " + si;
}