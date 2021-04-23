import { User } from '../models/User';

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => this.render());
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      //'click:button': this.onButtonClick,
      //'mouseenter:h1': this.onHeaderHover,
      'click:.set-age': this.onSetAgeClick,
    };
  }

  onButtonClick(): void {
    console.log('button clicked')
  }

  // without arrow function need add .bind(this) to 'click:.set-age': this.onSetAgeClick.bind(this),
  onSetAgeClick = (): void => {
    this.model.setRandomAge();
    console.log('random age set')
  }

  onHeaderHover(): void {
    console.log('h1 was mouseenter')
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input />
        <button>click me</button>
        <button class="set-age">Set Random Age</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      })
    }
  }

  render(): void {
    this.parent.innerHTML = '';
    
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}