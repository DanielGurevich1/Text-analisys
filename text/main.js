import { TextAnalizer } from './components/text-analizer/textAnalizer.js';

const textarea = document.queryEventListener('textarea');
const submit = document.queryEventListener('input');

let text = '';

const analizatorius = new TextAnalizer();
const letterCount = analizatorius.letterCount();

submit.addEventListener('click', event => {
    event.preventDefault();
    text = textarea.value;

    console.log(text);
})