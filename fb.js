function isValid(ele){
	return !ele.startsWith('0') && parseInt(ele) <= 26;
}

function solve(inputNumber, resultCount, prevResult){
	var node = {};
	var single = inputNumber.slice(0, 1);
	var double = inputNumber.slice(0, 2);
	if (isValid(single)) node[single] = {'result':(prevResult || '') + String.fromCharCode(96 + parseInt(single)), next: inputNumber.slice(1)};
	if (isValid(double)) node[double] = {'result':(prevResult || '') + String.fromCharCode(96 + parseInt(double)), next: inputNumber.slice(2)};
	for(var i in node){
		if (!node[i].next) return ++resultCount;
		resultCount = solve(node[i].next, resultCount, node[i].result);
	}
	return resultCount;
}

console.log(solve(process.argv[2], 0));


// 1111

// a 111
// 	aa 11
// 		aaa 1
// 			aaaa
// 		aak
// 	ak 1
// 		aka
// k 11
// 	kk 
// 	ka 1
// 		kaa


// aaaa
// kaa
// aka
// aak
// kk
