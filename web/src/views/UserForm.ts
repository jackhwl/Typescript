import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {

  eventsMap(): { [key: string]: () => void } {
    return {
      //'mouseenter:h1': this.onHeaderHover,
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick,
    };
  }

  onSetNameClick = (): void =>  {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;

      this.model.set({name});
    }

    console.log('button clicked')
  }

  // without arrow function need add .bind(this) to 'click:.set-age': this.onSetAgeClick.bind(this),
  onSetAgeClick = (): void => {
    this.model.setRandomAge();
    console.log('random age set')
  }

  onSaveClick = (): void => {
    this.model.save();
  }

  onHeaderHover(): void {
    console.log('h1 was mouseenter')
  }

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}" />
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model">Save</button>
      </div>
    `;
  }

}