class TextAnalizer {
    constructor(text) {
        this.text = text;
        this.abc = {
            en: lowercase: 'qwertyuioplkjhgfdsazxcvbnm',
            uppercase:'QWERTYUIOPASDFGHJKLZXCVBNM',
        
        }, 
        lt: {
            lowercase: 'ąčęėįšųūž', 
            uppercase: 'ĄČĘĖĮŠŲŪŽ',
        };
        this.languages = ['en'];
        this
    }
    letterCount() {
        let count = 0;

        for (let letter of this.text) {
            if (this.abc.includes(letter))
            count++;
        }
        return this.text.length();
    }
}

export { TextAnalizer }