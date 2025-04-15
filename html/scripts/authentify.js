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
    document.getElementById('navi').innerHTML = "";
    ["d - - - - - - - - objects", "d - - - - - - - - subjects", "d - - - - - - - - roles"].forEach((offer) => offerMenu(offer));
}

function offerMenu(offer){
    var isdir='menuitem';
    if (offer[0]=='-') {
        isdir='menuitem';
    } else {
        isdir='menudir';
    }
    offer=offer.split(" ").slice(-1)[0];
    const box = document.getElementById('navi');
    tmp = document.createElement('div');
    tmp.classList.add(isdir);
    if (isdir=='menudir'){
        console.log('directory');
        tmp.onclick=function() { listDir(offer, isdir) };
    } else {
        console.log('file');
        tmp.onclick=function() { readFile(offer, isdir) };
    }
    tmp.innerHTML=offer;
    box.appendChild(tmp);
}

function newObj() {
    var token = document.getElementById('token').innerHTML;
    var q = new XMLHttpRequest();
    var prefix = document.getElementById('locate').innerHTML;
    q.open('POST', 'scripts/new_obj.php', true);
    q.onload = function() {
        let stat = this.responseText;
        console.log(stat);
        if (stat[0]=="1"){
            var items = stat.split(/\r\n|\r|\n/);
            var location = items[1];
            location = location.substring(20, location.length);
            items = items.slice(3, -1);
            document.getElementById('navi').innerHTML = "";
            items.forEach((offer) => offerMenu(offer));
            document.getElementById('locate').innerHTML=location;
        } else {
            document.getElementById('locate').innerHTML="DENIED";
        }
    }
    q.onerror = function() {
        console.log("nuh-uh");
    }
    q.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    q.send('destination='+offer+'&token='+token+'&action=write&itype='+isdir);
}

function newDir() {
    var token = document.getElementById('token').innerHTML;
    var q = new XMLHttpRequest();
    var prefix = document.getElementById('locate').innerHTML;
    q.open('POST', 'scripts/new_dir.php', true);
    q.onload = function() {
        let stat = this.responseText;
        console.log(stat);
        if (stat[0]=="1"){
            var items = stat.split(/\r\n|\r|\n/);
            var location = items[1];
            location = location.substring(20, location.length);
            items = items.slice(3, -1);
            document.getElementById('navi').innerHTML = "";
            items.forEach((offer) => offerMenu(offer));
            document.getElementById('locate').innerHTML=location;
        } else {
            document.getElementById('locate').innerHTML="DENIED";
        }
    }
    q.onerror = function() {
        console.log("nuh-uh");
    }
    q.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    q.send('destination='+offer+'&token='+token+'&action=write&itype='+isdir);
}

function listDir(offer, isdir) {
    console.log('list dir');
    var token = document.getElementById('token').innerHTML;
    var q = new XMLHttpRequest();
    var prefix = document.getElementById('locate').innerHTML;
    q.open('POST', 'scripts/list_dir.php', true);
    q.onload = function() {
        let stat = this.responseText;
        console.log(stat);
        if (stat[0]=="1"){
            var items = stat.split(/\r\n|\r|\n/);
            var location = items[1];
            location = location.substring(20, location.length);
            items = items.slice(3, -1);
            document.getElementById('navi').innerHTML = "";
            items.forEach((offer) => offerMenu(offer));
            document.getElementById('locate').innerHTML=location;
        } else {
            document.getElementById('locate').style.color="red";
        }
    }
    q.onerror = function() {
        console.log("nuh-uh");
    }
    q.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    q.send('destination='+offer+'&token='+token+'&action=read&itype='+isdir+'&parent=none');
}

function readFile(offer, isdir) {
    console.log('read file');
    console.log(offer);
    var token = document.getElementById('token').innerHTML;
    var q = new XMLHttpRequest();
    var prefix = document.getElementById('locate').innerHTML;
    q.open('POST', 'scripts/read_file.php', true);
    q.onload = function() {
        let stat = this.responseText;
        console.log(stat);
        if (stat[0]=="1"){
            var items = stat.split(/\r\n|\r|\n/);
            var location = items[1];
            location = location.substring(20, location.length);
            items = items.slice(2, -1);
            document.getElementById('locate').innerHTML=location;
            document.getElementById('pad').value=items.join(' ');
        } else {
            document.getElementById('locate').style.color="red";
        }
    }
    q.onerror = function() {
        console.log("nuh-uh");
    }
    q.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    q.send('destination='+offer+'&token='+token+'&action=read&itype='+isdir+'&parent='+prefix);
}

function deleteFile() {
    var token = document.getElementById('token').innerHTML;
    var q = new XMLHttpRequest();
    var prefix = document.getElementById('locate').innerHTML;
    q.open('POST', 'scripts/delete_file.php', true);
    q.onload = function() {
        let stat = this.responseText;
        console.log(stat);
        if (stat[0]=="1"){
            var items = stat.split(/\r\n|\r|\n/);
            var location = items[1];
            location = location.substring(20, location.length);
            items = items.slice(3, -1);
            document.getElementById('navi').innerHTML = "";
            items.forEach((offer) => offerMenu(offer));
            document.getElementById('locate').innerHTML=location;
        } else {
            document.getElementById('locate').innerHTML="DENIED";
        }
    }
    q.onerror = function() {
        console.log("nuh-uh");
    }
    q.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    q.send('destination='+offer+'&token='+token+'&action=read&itype='+isdir);
}

function writeFile() {
    var token = document.getElementById('token').innerHTML;
    var q = new XMLHttpRequest();
    var prefix = document.getElementById('locate').innerHTML;
    q.open('POST', 'scripts/write_file.php', true);
    q.onload = function() {
        let stat = this.responseText;
        console.log(stat);
        if (stat[0]=="1"){
            var items = stat.split(/\r\n|\r|\n/);
            var location = items[1];
            location = location.substring(20, location.length);
            items = items.slice(3, -1);
            document.getElementById('navi').innerHTML = "";
            items.forEach((offer) => offerMenu(offer));
            document.getElementById('locate').innerHTML=location;
        } else {
            document.getElementById('locate').innerHTML="DENIED";
        }
    }
    q.onerror = function() {
        console.log("nuh-uh");
    }
    q.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    q.send('destination='+offer+'&token='+token+'&action=read&itype='+isdir);
}

function assignFile() {
    var token = document.getElementById('token').innerHTML;
    var q = new XMLHttpRequest();
    var prefix = document.getElementById('locate').innerHTML;
    q.open('POST', 'scripts/assign_file.php', true);
    q.onload = function() {
        let stat = this.responseText;
        console.log(stat);
        if (stat[0]=="1"){
            var items = stat.split(/\r\n|\r|\n/);
            var location = items[1];
            location = location.substring(20, location.length);
            items = items.slice(3, -1);
            document.getElementById('navi').innerHTML = "";
            items.forEach((offer) => offerMenu(offer));
            document.getElementById('locate').innerHTML=location;
        } else {
            document.getElementById('locate').innerHTML="DENIED";
        }
    }
    q.onerror = function() {
        console.log("nuh-uh");
    }
    q.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    q.send('destination='+offer+'&token='+token+'&action=read&itype='+isdir);
}

function renameFile() {
    var token = document.getElementById('token').innerHTML;
    var q = new XMLHttpRequest();
    var prefix = document.getElementById('locate').innerHTML;
    q.open('POST', 'scripts/rename_file.php', true);
    q.onload = function() {
        let stat = this.responseText;
        console.log(stat);
        if (stat[0]=="1"){
            var items = stat.split(/\r\n|\r|\n/);
            var location = items[1];
            location = location.substring(20, location.length);
            items = items.slice(3, -1);
            document.getElementById('navi').innerHTML = "";
            items.forEach((offer) => offerMenu(offer));
            document.getElementById('locate').innerHTML=location;
        } else {
            document.getElementById('locate').innerHTML="DENIED";
        }
    }
    q.onerror = function() {
        console.log("nuh-uh");
    }
    q.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    q.send('destination='+offer+'&token='+token+'&action=read&itype='+isdir);
}
