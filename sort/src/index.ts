import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const collection = new NumbersCollection([10, 3, 9, -5, 0]);
collection.sort();
//const sorter = new Sorter(collection);
//sorter.sort();

console.log(collection.data);


const s_collection = new CharactersCollection("deiOmOIUUEJKSDksdf");
//const s_sorter = new Sorter(s_collection);
s_collection.sort();

console.log(s_collection.data);


const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(5);
linkedList.add(56);
linkedList.add(3);
linkedList.add(-45);
//const l_sorter = new Sorter(linkedList);
linkedList.sort();

linkedList.print();
