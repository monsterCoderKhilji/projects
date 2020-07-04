import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titlecase'
})
export class SentenceImport implements PipeTransform {

    transform(sentence: string) {
        if (!sentence) {
            return null;
        }
        const splitarr: Array<string> = sentence.split(' ');
        let count = 0;
        const result = splitarr.map((word) => {
            if (count === 0) {
                count++;
                return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
            }
            else {
                if ((word.toLowerCase() !== 'of' && word.toLowerCase() !== 'the')) {
                    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
                } else {
                    return word.toLowerCase();
                }
            }
        }).join(' ');
        return result;
    }
}
