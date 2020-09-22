import { observable, action } from 'mobx';
var key = 0;
export default class TodoItem {
    id = Date.now() + key++;

    @observable text: string = '';
    @observable isDone: boolean = false;
    @observable isEditing: boolean = false;

    constructor(text: string) {
        this.text = text;
    }

    @action
    toggleIsDone = () => {
        this.isDone = !this.isDone
    }

    @action
    updateText = (text: string) => {
        this.text = text;
    }

    @action
    toggleIsEdit = () => {
      this.isEditing = !this.isEditing;
    }
}
