export class LocalStore {
  constructor() {
    this.store = window.localStorage;
  }

  getTasks() {
    return JSON.parse(this.store.getItem('tasks') || '[]');
  }

  setTasks(tasks = []) {
    this.store.setItem('tasks', JSON.stringify(tasks));
  }
}
