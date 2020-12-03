class TextAnalizer {
    constructor(text) {
        this.text = text;
        this.abc = {
            en: {
            lowercase: 'qwertyuioplkjhgfdsazxcvbnm',
            uppercase:'QWERTYUIOPASDFGHJKLZXCVBNM',
        
        }, 
        lt: {
            lowercase: 'ąčęėįšųūž', 
            uppercase: 'ĄČĘĖĮŠŲŪŽ',
        },
        // this.languages = ['en'];
        // this
    };
            this.lowercaseEnabled = true;
            this.uppercaseEnabled = true;
            this.languages =[];
            this.finalAbc = [];

            this.addLanguage('en');
}

addLanguage(newLang) {
    if (this.abc[newLang]) {
        this.languages.push(newLang);

        this.finalAbc = '';
        for (let lang of this.languages) {
            if (this.lowercaseEnabled) {
                this.finalAbc += this.abc[lang].lowercase;
            }
        }
    } else {
        console.error(`error: norima (${newLang}) kalba nerasya.`);
    }
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