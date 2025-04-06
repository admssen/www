function identify() {
    var name = "name="+document.getElementById('name').value;
    var q = new XMLHttpRequest();
    q.open('POST', 'scripts/identify.php', true);
    q.onload = function() {
        let stat = this.responseText;
        console.log("bruh");
    }
    q.onerror = function() {
        console.log("nuh-uh");
    }
    q.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    q.send('name='+name);
}
