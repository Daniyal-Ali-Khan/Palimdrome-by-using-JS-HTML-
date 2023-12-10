function checkPalindrome() {
  const text = document.getElementById('text-input').value;
  const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedText = cleanText.split('').reverse().join('');

  if (cleanText === reversedText) {
    document.getElementById('result').textContent = `"${text}" is a palindrome!`;
  } else {
    document.getElementById('result').textContent = `"${text}" is not a palindrome.`;
  }
}

  