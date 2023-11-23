export interface Todo {
    getAllTodos():Promise<any>;
    getTodayTodo():Array<object>;
    getImportantTodo():Array<object>;
    getCurrentTodo():Array<object>;
}
