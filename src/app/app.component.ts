import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatButtonModule, 
  MatIconModule,FormsModule,SidebarComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  constructor(private todoService:TodoService) {
   
  }
  ngOnInit(): void {
    let todosPromise = this.todoService.getAllTodos();
    todosPromise.then(data=>{
      data.forEach((obj:any)=>{
        this.todoList.push(obj.name);
      })
    })
  }
  title = 'todoApp';
  todoHeader = "Yapılacaklar Listesi";
  todoItem:string = "";
  editedTodoItem:string = "";
  todoList:Array<string> = [];
  todoCompletedList:Array<string> = ["Projenin son kodlarının uzak sunucuya gönderilmesi","Kurs içeriği kontrolü"];
  todoRemovedList:Array<string> = ["Gece gündemi"];
  editStatus: boolean[] = Array(this.todoList.length).fill(false);
  todoHeaderEditStatus: boolean = false;
  //Yapılacaklar'a todo ekler
  addTodo(){
    this.todoList.push(this.todoItem);
  }
  //Yapılacaklardaki todo'yu yapılacaklardan silerek tamamlananlara ekler
  addToCompletedTodo(index:number){
    this.todoCompletedList.push(this.todoList[index]);
    this.todoList.splice(index,1);
  }
  //Yapılacaklardaki i.todo'yu silerek silinmiş olanlara ekler  
  removeTodotoRemovedTodo(index:number){
    this.todoRemovedList.push(this.todoList[index]);
    this.todoList.splice(index,1);
  }
  //Tamamlananlardaki i.todo'yu silerek silinmiş olanlara ekler
  removeCompletedTodotoRemovedTodo(index:number){
    this.todoRemovedList.push(this.todoCompletedList[index]);
    this.todoCompletedList.splice(index,1);
  }
  //Silinmiş i.todo'yu silinmişlerden de kaldırır.
  removeRemovedTodo(index:number){
    this.todoRemovedList.splice(index,1);
  }
  //i. todo için düzenleme modunu aktif yada deaktif eder
  toggleEditStatus(index: number): void {
    this.editStatus[index] = !this.editStatus[index];
  }
  //i. todo'yu yeniden düzenler
  editTodo(index:number){
    this.todoList[index] = this.editedTodoItem;
    this.editStatus[index] = !this.editStatus[index];
    this.editedTodoItem ="";
  }
  // Silinmiş i.todo'yu silinmişlerden kaldırarak "Yapılacaklara" tekrardan ekler(sonuna)
  undoRemove(index:number){
    this.todoList.push(this.todoRemovedList[index]);
    this.todoRemovedList.splice(index, 1);
  }
  // Tamamlanmış i.todo'yu tamamlanmışlardan kaldırarak "Yapılacaklara" tekrardan ekler(sonuna)
  undoRemoveCompleted(index:number){
    this.todoList.push(this.todoCompletedList[index]);
    this.todoCompletedList.splice(index, 1);
  }
  //Listenin ismini değiştirir
  editHeader(){
    this.todoHeaderEditStatus = !this.todoHeaderEditStatus;
    this.todoHeader = this.todoHeader;
  }
  
}
