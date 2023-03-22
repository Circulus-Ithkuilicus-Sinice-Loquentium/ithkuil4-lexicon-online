import lexicon from '../data/lexicon'
import { Root } from '../types';

export function search(keyword: string): Root[] {
    const lowerCaseKeyword = keyword.toLowerCase()
    const list: Root[] = [];
    for (let i = 0; i < lexicon.length; i++) {
        if (list.length === 10) break;
        const { root, refers, stems } = lexicon[i];
        if (
            root.toLowerCase().includes(lowerCaseKeyword) ||
            refers.toLowerCase().includes(lowerCaseKeyword)
        ) {
            list.push({
                root,
                refers: refers.split(' / '),
                stems
            })
        }
    }
    return list;
}