const InputText1 = document.querySelector('#input0');
const OutputText = document.querySelector('#output0');
const button1 = document.querySelector('.create');
const button2 = document.querySelector('.clear');


const ClearTextArea = () => {
  if (InputText1.value === "") {
    confirm("Текстовое поле уже пустое!");
    return;
  }
  InputText1.value = OutputText.value = "";
}
button2.onclick = ClearTextArea;

button1.addEventListener('click', function () {
  let CopyInputText1 = InputText1.value;
  OutputText.value = " ";
  if (InputText1.value === "") {
    confirm("Текстовое поле пустое! Введите текст!");
    return;
  }
  let AnswArray = [];
  let ArrayWords = InputText1.value.match(/\w+/g);
  let text0 = "Количество слов в тексте: " + ArrayWords.length + '\n';
  AnswArray.push(text0);
  let countRepeatedWords = {};
  ArrayWords.forEach(elem => {
    if (countRepeatedWords[elem])
      countRepeatedWords[elem]++;
    else countRepeatedWords[elem] = 1;
  });
  AnswArray.push("Используемые слова и их количество:\n");
  const sortedWords = Object.entries(countRepeatedWords).sort(
    (a, b) => b[1] - a[1]);
  sortedWords.forEach(([word, count]) => AnswArray.push(word + ': ' + count + '\n'));
  AnswArray.forEach(elem => {
    OutputText.value += elem;
  });
});






