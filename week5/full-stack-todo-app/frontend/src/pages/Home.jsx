import { CreateTodo } from "../components/CreateTodo";
import { TodoList } from "../components/Todolist";

export function Home(props){
    return(
        <div>
            <CreateTodo/>
            <TodoList todos={props.todos}/>
        </div>
    )
}