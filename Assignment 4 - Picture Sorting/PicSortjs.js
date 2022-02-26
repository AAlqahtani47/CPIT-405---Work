let obj = { name: "CPIT 405 - Sorting Pictures" }
let h1Elem = document.createElement("h1");
h1Elem.innerText = obj.name;
document.body.append(h1Elem);
document.write("After Sorting (Based on # of likes):");
document.write("<br> <br>");

// sorting and displaying images
let likes;
let images = [
    { name: 'apple', likes: 9, url: 'https://logoeps.com/wp-content/uploads/2014/09/37150-apple-logo-icon-vector-icon-vector-eps.png' },
    { name: 'html', likes: 2, url: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png' },
    { name: 'android', likes: 5, url: 'https://logoeps.com/wp-content/uploads/2014/06/38002-android-logo-icon-vector-icon-vector-eps.png' },
    { name: 'cisco', likes: 3, url: 'https://translatorswithoutborders.org/wp-content/uploads/2021/12/Cisco-logo.png' }
];

// Sort the array of images
images.sort(compare);
function compare(a, b) {
    if (parseInt(a.likes)  < parseInt(b.likes)) {
        return -1;
    }
    else if (parseInt(a.likes) > parseInt(b.likes)) {
        return 1;
    }
    else {
        return 0;
    }
}
for (imageItem of images) {
    let imgElem = document.createElement("img");
    imgElem.src = imageItem.url;
    document.body.append(imgElem);
}