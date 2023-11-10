/* Given a word, "getLengthOfWord" returns the length of the given word. */

/*Given a word, "getLengthOfWord" returns the length of the given word.*/

function getLengthOfWord(word = -1) {
	if (typeof word != "string") {
		return (-1);
	} else {
		return (word.length);
	}
}
getLengthOfWord("GUVI");
getLengthOfWord("");
getLengthOfWord();
getLengthOfWord(9);
/*
Lines For TestCase
getLengthOfWord("GUVI");
getLengthOfWord("");
getLengthOfWord();
getLengthOfWord(9);
*/