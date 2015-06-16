var third = [2, 5, 3, 6, 9];
        var check = function (){
        var num = prompt('Введите число', '');
        	if (num > 0){
        		document.write('Число положительное' + '<br>');}
        	else{
        		document.write('Число отрицательное' + '<br>');};
        		
        	if (num > 1 && num % 1 != 0 && num % num != 0){
        		document.write('Введенное число является простым' + '<br>');}
        	else{
        		document.write('Введенное число не является простым' + '<br>');};
        		
        	for (i = 0; i < third.length; i++ ){
        		var m = third.join(',');
        		if(num % third[i] != 0){
        		document.write('Число делится без остатка на ' + m + '<br>');}
        		else {
        		document.write('Число делится на ' + m + ' с остатком ' + '<br>');};
        	}
        }
        check();
