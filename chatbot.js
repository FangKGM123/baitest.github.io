function normalize(text) {
  return text.toLowerCase().trim();
}

// Tính độ giống (đơn giản)
function similarity(a, b) {
  let wordsA = a.split(" ");
  let wordsB = b.split(" ");

  let match = 0;

  wordsA.forEach((word) => {
    if (wordsB.includes(word)) match++;
  });

  return match / Math.max(wordsA.length, wordsB.length);
}

function getReply(userInput) {
  userInput = normalize(userInput);

  let bestScore = 0;
  let bestAnswer = "Xin lỗi, tôi chưa hiểu câu hỏi.";

  data.forEach((item) => {
    let score = similarity(userInput, normalize(item.question));

    if (score > bestScore) {
      bestScore = score;
      bestAnswer = item.answer;
    }
  });

  if (bestScore < 0.3) {
    return "Bạn có thể hỏi rõ hơn không?";
  }

  return bestAnswer;
}
