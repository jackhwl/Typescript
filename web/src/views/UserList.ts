import { User, UserProps } from "../models/User";
import { CollectionView } from "./CollectionView";

export class UserList extends CollectionView<User, UserProps> {
    renderItem(model: User, itemParent: Element): void {
        this.collection.forEach(item => {
            //item.
        })
    }

}