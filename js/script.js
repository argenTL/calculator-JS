


inc = () => {
    let f = document.getElementById('first').value;
    f = parseInt(f);
    let s = document.getElementById('second').value;
    s = parseInt(s);
    let total = f + s;
    document.getElementById('zero').innerHTML = total;
};

dec = () => {
    let f = document.getElementById('first').value;
    f = parseInt(f);
    let s = document.getElementById('second').value;
    s = parseInt(s);
    let total = f - s;
    document.getElementById('zero').innerHTML = total;
};

mul = () => {
    let f = document.getElementById('first').value;
    f = parseInt(f);
    let s = document.getElementById('second').value;
    s = parseInt(s);
    let total = f * s;
    document.getElementById('zero').innerHTML = total;
};

divs = () => {
    let f = document.getElementById('first').value;
    f = parseInt(f);
    let s = document.getElementById('second').value;
    s = parseInt(s);
    let total = f / s;
    document.getElementById('zero').innerHTML = total;
};

