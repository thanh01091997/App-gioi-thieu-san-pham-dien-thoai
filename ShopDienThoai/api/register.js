const register = (name, email, password) => (
    fetch('http://192.168.1.102/api/insert_singup.php',
    {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({name, email, password})
    })
    .then(res => res.text())
);
module.exports = register;