/*
* calculate change
*/
function calcChange(cReturn, denominations) {
	let change = [];
	
	// loop through each denomination and calculate change
	for (let den of denominations) {
		let count = 0;
		if(cReturn % den < cReturn) {
			count = parseInt(cReturn / den);
		} 
				
		// decrease return
		cReturn = cReturn - den * count;
		
		// push denominations value to change array
		const obj = { 
			'denomination': den,
			'count': count
		};
		change.push(obj);

	}
	
	return change;
}


/*
* function to display coin change in readable format
*/
function dispChange(change) {
	let str = "Change owed: ";
	for(let c of change) {
		if(c.count !== 0) {
			str += `${c.denomination}€ x ${c.count}, `;
		}
	}
	return str;
}
