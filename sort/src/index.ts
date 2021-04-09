import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection';

const collection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(collection);
sorter.sort();

console.log(collection.data);


const s_collection = new CharactersCollection("deiOmOIUUEJKSDksdf");
const s_sorter = new Sorter(s_collection);
s_sorter.sort();

console.log(s_collection.data);

