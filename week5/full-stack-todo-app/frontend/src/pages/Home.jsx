import { CreateTodo } from "../components/CreateTodo";
import { TodoList } from "../components/Todolist";
import './home.css'
export function Home(props){
    return(
        <div className="container-body">
            <CreateTodo/>
            <TodoList todos={props.todos}/>
        </div>
    )
}