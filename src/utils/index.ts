import lexicon from '../data/lexicon'
import { Root } from '../types';

export function search(keyword: string): Root[] {
    const lowerCaseKeyword = keyword.toLowerCase()

    const rootsFromRoot: Root[] = [];
    const rootsFromRefers: Root[] = [];
    const rootsFromStems: Root[] = [];

    for (let i = 0; i < lexicon.length; i++) {
        if (rootsFromRoot.length === 10) break;

        const { root, refers, stems, notes } = lexicon[i];
        if (root.toLowerCase().includes(lowerCaseKeyword)) {
            rootsFromRoot.push({
                root,
                refers: refers ? refers.split(' / ') : [],
                stems,
                notes
            })
        }
        else if (refers?.toLowerCase().includes(lowerCaseKeyword)) {
            rootsFromRefers.push({
                root,
                refers: refers ? refers.split(' / ') : [],
                stems,
                notes
            })
        } else if (stems?.some(stem => {
            if (typeof stem === 'string') {
                return stem.toLowerCase().includes(lowerCaseKeyword)
            } else {
                return Object.values(stem).some(spec => spec.toLowerCase().includes(lowerCaseKeyword))
            }
        })) {
            rootsFromStems.push({
                root,
                refers: refers ? refers.split(' / ') : [],
                stems,
                notes
            })
        }
    }

    if (rootsFromRoot.length === 10) return rootsFromRoot;

    const roots = rootsFromRoot.concat(rootsFromRefers)
    if (roots.length >= 10) return roots.slice(0, 10);
    
    return roots.concat(rootsFromStems).slice(0, 10);
}