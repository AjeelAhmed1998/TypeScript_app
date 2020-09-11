interface Todo{
    text: string; 
    complete: boolean;
}


type ToggleTodo = (seletectedTodo: Todo) => void;   

type AddTodo = (text: string) => void; 