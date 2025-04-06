function identify() {
    var name = document.getElementById('name').value;
    var q = new XMLHttpRequest();
    q.open('POST', 'scripts/identify.php', true);
    q.onload = function() {
        let stat = this.responseText;
        if (stat==1) {
            document.getElementById('identified').innerHTML="IDENTIFICATION: SUCCESSFUL";
        } else {
            document.getElementById('identified').innerHTML="IDENTIFICATION: FAILURE";
        }
    }
    q.onerror = function() {
        console.log("nuh-uh");
    }
    q.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    q.send('name='+name);
}
