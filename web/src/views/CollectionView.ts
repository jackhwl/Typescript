import { Collection } from '../models/Collection';
import { Model } from '../models/Model';

export abstract class CollectionView<T extends Model<K>, K> {
    collection: Collection<T, K>[]=[];
    abstract renderItem(model: T, itemParent: Element): void;
    render(): void {}
}