import lexion from '../data/lexion'
import { Lexion } from '../types';

const entries = Object
    .entries(lexion)
    .map(([key, { refers }]) => [key, refers] as [string, string]);

export function search(keyword: string): Lexion[] {
    const lowerCaseKeyword = keyword.toLowerCase()
    const list = [];
    for (let i = 0; i < entries.length; i++) {
        if (list.length === 10) break;
        const [key, refers] = entries[i];
        if (
            key.toLowerCase().includes(lowerCaseKeyword) ||
            refers.toLowerCase().includes(lowerCaseKeyword)
        ) {
            list.push({
                lexion: key,
                refers: refers.split(' / ')
            })
        }
    }
    return list;
}