function selectAllP (){
        var p = document.getElementsByTagName('p');
        for (var i = 0; i < p.length; i++) {
            p[i].style.border = '1px solid green';
        }
    }
    selectAllP();

function selectAllL (){
    var l = document.getElementsByTagName('a');
    for (var i=0; i < l.length; i++){
        l[i].style.border = '2px dotted red';
    }
}

function selectDiv(){
    var d = document.getElementById('test_div');
    d.style.border = '3px dashed blue';

}

function cleanAll(){
    var d = document.getElementsByName('button');
    for (var i=0; i< d.length; i++){
        d[i].style.border = 'none';
    }
}