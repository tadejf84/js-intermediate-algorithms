/**
 * Calculate change
 * 
 * @param {number} cReturn 
 * @param {array} denominations 
 * 
 * @returns {array} change
 */
function calcChange(cReturn, denominations) {
	let change = [];
	
	// Loop through each denomination and calculate change
	for (let den of denominations) {
		
		let count = 0;

		if(cReturn % den < cReturn) {
			count = parseInt(cReturn / den);
		} 
				
		// Decrease return
		cReturn = cReturn - den * count;
		
		// Push denominations value to change array
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
function displayChange(change) {
	let str = "Change owed: ";
	for(let c of change) {
		if(c.count !== 0) {
			str += `${c.denomination}€ x ${c.count}, `;
		}
	}
	console.log(str);
}
