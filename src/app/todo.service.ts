import { Injectable } from '@angular/core';
import { Todo } from './todo';
// Initialize Firebase
import { firebaseConfig } from './environment';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection, getDocs, Firestore} from "firebase/firestore/lite";

@Injectable({
  providedIn: 'root'
})
export class TodoService implements Todo{
  firebaseApp = initializeApp(firebaseConfig);
  db = getFirestore(this.firebaseApp);
  //getAnalytics(this.firebaseApp);
  constructor() { }
  getCurrentTodo(): object[] {
    throw new Error('Method not implemented.');
  }
  async getAllTodos(): Promise<any> {
    const todosCol =  collection(this.db, "todo");
    const todosSnapShot = await getDocs(todosCol);
    const todosList = todosSnapShot.docs.map(doc=>doc.data());
    return todosList;
  }
  getTodayTodo(): object[] {
    throw new Error('Method not implemented.');
  }
  getImportantTodo(): object[] {
    throw new Error('Method not implemented.');
  }
  
}
