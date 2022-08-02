function ToDo({ todo, toggleTask, removeTask }) {
    return (
        <div key={todo.id} className="item-todo" onClick={() => toggleTask(todo.id)}>
            {/* нужно поднять выше ↑ */}
            <div className="container">
                <div className={"name " + (todo.complete ? "item-text strike" : "item-text")}>{todo.title}</div>
                <div className={"desc " + (todo.complete ? "item-text strike" : "item-text")}>{todo.desc}</div>
            </div>
            <div className="item-delete" onClick={() => removeTask(todo.id)}>
                x
            </div>
        </div>
    );
}

export default ToDo;
