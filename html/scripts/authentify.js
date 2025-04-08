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
            visuallyGreet();
            document.getElementById('identified').innerHTML = name;
            var roles = stat.split(/\r\n|\r|\n/);
            var token = roles[1];
            roles = roles.slice(2, -1);
            document.getElementById('token').innerHTML = token;
            roles.forEach((role) => displayRoles(role));
            createMenu();
        } else {
            visuallyLock();
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

function visuallyGreet(){
    document.getElementById('desc').style.minHeight = "196px";
    document.getElementById('ver').innerHTML = "CHANGE ACCOUNT";
    document.getElementById('authstat').innerHTML = "AUTHORIZED AS";
    document.getElementById('dir').style.backgroundColor = "#303044";
    document.getElementById('eye').style.backgroundColor = "#303044";
    document.getElementById('navi').innerHTML = "";
}

function visuallyLock(){
    document.getElementById('dir').style.backgroundColor = "#000008";
    document.getElementById('eye').style.backgroundColor = "#000008";
    document.getElementById('ver').innerHTML = "LOG IN";
    document.getElementById('authstat').style.color = "red";
    document.getElementById('desc').style.minHeight = "36px";
    document.getElementById('authstat').innerHTML = "FAILURE";
    document.getElementById('identified').innerHTML = "";
    document.getElementById('token').innerHTML = "";
    document.getElementById('navi').innerHTML = "";
}

function createMenu() {
    ["filesystem", "users", "roles"].forEach((offer) => offerMenu(offer));
}

function offerMenu(offer){
    const box = document.getElementById('navi');
    tmp = document.createElement('div');
    tmp.classList.add('menuitem');
    tmp.onclick=function()
    tmp.innerHTML=offer;
    box.appendChild(tmp);
}

function authorizeAccess(){
    
}
