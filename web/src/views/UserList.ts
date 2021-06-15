import { User, UserProps } from "../models/User";
import { CollectionView } from "./CollectionView";

export class UserList extends CollectionView<User, UserProps> {
    template(model: User): string {
        return `
          <div>
            <div>User Name: ${model.get('name')}</div>
            <div>User Age: ${model.get('age')}</div>
          </div>
        `;
    } 

    renderItem(model: User, itemParent: Element): void {
        //itemParent.innerHTML = '';
    
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template(model);
    
        //this.bindEvents(templateElement.content);
        //this.mapRegions(templateElement.content);
    
        //this.onRender();
    
        itemParent.append(templateElement.content);
    }

}