function authentify() {
    document.getElementById('authstat').style.color = "#f1e7f8";
    document.getElementById('rolelist').innerHTML = '';
    var name = document.getElementById('name').value;
    var pass = document.getElementById('pass').value;
    var q = new XMLHttpRequest();
    q.open('POST', 'scripts/authentify.php', true);
    q.onload = function() {
        let stat = this.responseText;
        if (stat[0]==1) {
            document.getElementById('desc').style.minHeight = "196px";
            document.getElementById('authstat').innerHTML = "AUTHORIZED AS";
            document.getElementById('identified').innerHTML = name;
            var roles = stat.split(/\r\n|\r|\n/);
            roles = roles.slice(1, -1);
            roles.forEach((role) => displayRoles(role));
        } else {
            document.getElementById('authstat').style.color = "red";
            document.getElementById('desc').style.minHeight = "36px";
            document.getElementById('authstat').innerHTML = "FAILURE";
            document.getElementById('identified').innerHTML = "";
        }
    }
    q.onerror = function() {
        console.log("nuh-uh");
    }
    q.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    q.send('name='+name+'&pass='+pass);
}

function displayRoles(role){
    role = role.split(':')[0];
    role = role.replaceAll("_", " ");
    const box = document.getElementById('rolelist');
    tmp = document.createElement('div');
    tmp.classList.add('role');
    tmp.innerHTML=role;
    box.appendChild(tmp);
}
