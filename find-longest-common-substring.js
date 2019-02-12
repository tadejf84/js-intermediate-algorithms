/*
* find longest common substring of two strings
*/
function findLongestCommonSubstr (str1, str2) {
	str1 = str1.toLowerCase().split(' ').join('');
	str2 = str2.toLowerCase().split(' ').join('');

	let max = 0, index = 0, lcsarr = new Array(str1.length + 1), str = "";
	for (var i = 0; i <= str1.length + 1; i++) {
		lcsarr[i] = new Array(str2.length + 1);
		for (var j = 0; j <= str2.length + 1; j++) {
			lcsarr[i][j] = 0;
		}
	}
	for (let i = 0; i <= str1.length; i++) {
		for (let j = 0; j <= str2.length; j++) {
			if (i === 0 || j === 0) {
				lcsarr[i][j] = 0;
			} else {
				if (str1[i - 1] == str2[j - 1]) {
					lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
				} else {
					lcsarr[i][j] = 0;
				}
			}
			if (max < lcsarr[i][j]) {
				max = lcsarr[i][j];
				index = i;
			}
		}
	}

	if (max == 0) {
		return "";
	} else {
		for (let i = index-max; i <= max; i++) {
			str += str2[i];
		}
		return str;
	}
}