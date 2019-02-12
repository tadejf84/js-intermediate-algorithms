/*
* calc change
*/
function makeChange(origAmt, coins) {
	let remainAmt = 0;
	if (origAmt % .25 < origAmt) {
		coins[3] = parseInt(origAmt / .25);
		remainAmt = origAmt % .25;
		origAmt = remainAmt;
	}
	if (origAmt % .1 < origAmt) {
		coins[2] = parseInt(origAmt / .1);
		remainAmt = origAmt % .1;
		origAmt = remainAmt;
	}
	if (origAmt % .05 < origAmt) {
		coins[1] = parseInt(origAmt / .05);
		remainAmt = origAmt % .05;
		origAmt = remainAmt;
	}
	coins[0] = parseInt(origAmt / .01);
	return coins;
}
