import "./App.css";
import { useEffect, useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import { GET, POST } from "./core/fetch";

function App() {
    const [todos, setTodos] = useState([]);

    const addTask = async (userInput) => {
        if (userInput) {
            // const newItem = {
            //     id: Math.random().toString(36).substring(2, 9),
            //     title: userInput,
            //     complete: false,
            // };
            const newItem = {
                desc: "",
                title: userInput,
                complete: false,
            };
            await POST("create", newItem);
            await getTodo();
            // setTodos([...todos, newItem]);
        }
    };

    const getTodo = async () => {
        setTodos(await GET("getAll"));
    };
    // EVGZAP 02.08.2022
    useEffect(() => {
        getTodo();
    }, []);

    const removeTask = async (id) => {
        // setTodos([...todos.filter((todo) => todo.id !== id)]);
        // GET(`delete/${id}`);
        await GET(`delete/${id}`);
        await getTodo();
    };

    const handleToggle = (id) => {
        setTodos([...todos.map((todo) => (todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }))]);
    };

    return (
        <div className="App">
            <header>
                <h1>Всего задач: {todos.length}</h1>
            </header>
            <ToDoForm addTask={addTask} />
            {todos.map((todo) => {
                return <ToDo todo={todo} key={todo.id} toggleTask={handleToggle} removeTask={removeTask} />;
            })}
        </div>
    );
}

export default App;
