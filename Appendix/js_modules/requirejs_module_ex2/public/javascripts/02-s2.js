require(['02-s1'], function (s1) {
    console.log("s2");
    document.body.appendChild(document.createTextNode(s1.text));
});