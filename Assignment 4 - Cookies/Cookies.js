window.onload = function() {
    if (document.cookie != undefined && document.cookie.indexOf('theme') != -1) {
        document.body.setAttribute("class", document.cookie.split('=')[1])
    }
  }

function showLastSort(element) {
    var expirationTime = new Date()
    expirationTime.setHours(expirationTime.getHours() + 1)
    document.cookie = 'theme=' + element.value + ';expires=' + expirationTime.toUTCString()
    document.body.setAttribute("class", element.value)
}