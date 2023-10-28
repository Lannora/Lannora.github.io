document.addEventListener('DOMContentLoaded', function() {
    window.alert = function() {
        if (!document.getElementById('alertPanel').classList.contains('active')) {
            document.getElementById('alertPanel').classList.add('active');
            document.getElementById('alertPanel').style.display='block';
    	    document.getElementById('overlay').style.display='block';
        }
    }
})

function alertWithCopyButton() {
    document.getElementById('alertCopyButton').style.display='block';
    document.getElementById('overlay').style.display='block';
}

function closealert() {
    	document.getElementById('alertPanel').style.display='none';
    	document.getElementById('overlay').style.display='none';
        document.getElementById('alertCopyButton').style.display='none';
}

