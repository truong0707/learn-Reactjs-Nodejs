import '../App.css';
import { useState } from 'react'


export default function Ex1TodoList2() {

    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState(() => {
        const storageTodos = JSON.parse(localStorage.getItem('todos'));

        return storageTodos ?? []
    }); /* (*) */


    function handleChange(e) {
        setTodo(e.target.value)
    }

    function handleDelete(index) {
        setTodos((prev) => {
            const newTodos = prev.filter((item, id) => id !== index)
            localStorage.setItem('todos', JSON.stringify(newTodos))  /* (**) */

            return newTodos
        })

    }


    function handleUpdate() {
        console.log("Update")
    }

    function handleSubmit() {
        setTodos(prev => {
            const newTodos = [...prev, todo]
            const jsonTodos = JSON.stringify(newTodos)

            // Lưu trong local storage
            localStorage.setItem('todos', jsonTodos)


            return newTodos
        })
        setTodo('')
    }

    return (
        <div>
            <div className='HeaderBox'><h3>Danh sách sinh viên</h3></div>
            <input value={todo} onChange={handleChange} />
            <button onClick={handleSubmit}>Click Add Item</button>

            <ul className="list-group">
                {todos.map((todo, index) => (
                    <li key={index} className="list-group-item">
                        <h5>{index}.{todo}</h5>
                        <button onClick={() => { handleDelete(index) }} style={{ float: 'right' }}>Delete</button>
                        <button onClick={handleUpdate} style={{ float: 'right' }}>Update</button>
                    </li>
                ))}
            </ul>

        </div>
    );
}




// (*) Trong trường hợp storageTodos null  hoặc undefind thì nó sẽ trả ra mảng rỗng
// Local storage nó chỉ cho lưu ở dạng chuỗi
// (**) filter() : để chuyển dữ liệu có các phần tử là OBJ trả về 1 mảng dữ liệu






// export default function Ex1TodoList2() {
//     const [todo, setTodo] = useState('')
//     const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('Todos')) ?? [])
//     const [change, setChange] = useState(false)
//     const [id, setId] = useState()
//     const handleSubmit = () => {
//         if (change) {
//             handleupdate()
//         } else {
//             setTodos((prev) => {
//                 const newTodos = [...prev, todo]
//                 localStorage.setItem('Todos', JSON.stringify(newTodos))
//                 return newTodos
//             })
//             setTodo('')
//         }
//     }

//     const handleRemove = (index) => {
//         setTodos((pre) => {
//             const newTodos = pre.filter((item, id) => id !== index)
//             localStorage.setItem('Todos', JSON.stringify(newTodos))
//             return newTodos
//         })
//         console.log(index)
//     }
//     const handleupdate = () => {
//         todos[id] = todo;
//         setTodos((prev) => {
//             const newTodos = [...prev]
//             localStorage.setItem('Todos', JSON.stringify(newTodos))
//             return newTodos
//         })
//         setChange(false)
//         setTodo('')
//     }
//     const handleChange = (index) => {
//         setChange(true)
//         setTodo(todos[index])
//         setId(index)
//     }

//     return (
//         <div style={{ padding: 30 }} className='Todo'>
//             <input
//                 value={todo}
//                 onKeyDown={(e) => e.keyCode === 13 && todo && handleSubmit()}
//                 onChange={(e) => { setTodo(e.target.value) }}
//             />
//             <button onClick={() => { todo && handleSubmit() }}>{(change && 'Save') || 'Add'}</button>
//             <ul>
//                 {todos.map((todo, index) =>
//                     <li key={index}>{todo}
//                         <button onClick={() => { handleRemove(index) }} style={{ marginLeft: 30 }}>
//                             Remove
//                         </button>
//                         <button
//                             onClick={() => handleChange(index)}
//                         >
//                             changes
//                         </button>
//                     </li>
//                 )}
//             </ul>
//         </div>
//     )
// }