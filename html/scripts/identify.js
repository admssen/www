function identify() {
    var name = document.getElementById('name').value;
    console.log(name);
    var q = new XMLHttpRequest();
    q.open('POST', 'scripts/identify.php', true);
    q.onload = function() {
        let stat = this.responseText;
        if (stat==name) {
            document.getElementById('is_identified').value="IDENTIFICATION: SUCCESSFUL";
        }else {
            document.getElementById('is_identified').value="IDENTIFICATION: FAILURE";
        }
    }
    q.onerror = function() {
        console.log("nuh-uh");
    }
    q.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    q.send('name='+name);
}
