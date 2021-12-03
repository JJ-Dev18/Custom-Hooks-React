# useArray Hook

Ejemplo: 

const TodoList = () => {
  const tasks = useArray([]);
  const [newTask, setNewTask] = useState("");

  // "Add" button clicked
  const handleSubmit = e => {
    e.preventDefault();
    tasks.push(newTask);
    setNewTask("");
  };