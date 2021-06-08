import { Collection } from '../models/Collection';
import { Model } from '../models/Model';

export abstract class CollectionView<T extends Model<K>, K> {
    collection: Collection<T, K>[]=[];

    constructor(public parent: Element, public model: T) {
        //this.bindModel();
    }

    abstract renderItem(model: T, itemParent: Element): void;

    render(): void {}
}