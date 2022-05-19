import { useEffect, useState } from 'react'

// 1. useEffect(callback)
// + Gọi callback  mỗi khi component render
// + Gọi callback sau khi component thêm element vào DOM

export default function Ex1UseEffect2() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        console.log(document)
        document.title = title
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(post => {
            setPosts(post)
            // console.log(post)
        })
    }, []) // [] khi bạn muốn thực hiện 1 cái logic gì đó  1 lần sau khi components đc mount và 
           // không muốn nó gọi lại khi components bị re-render 

    return (
        <>
            <h1>Xinchao2</h1>
            <input value={title} onChange={e => setTitle(e.target.value)}></input>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>

    );
}








// Có 3 Trường hợp sử dụng effect:

// 1. useEffect(callback) (ít sài)
// + Gọi callback  mỗi khi component render
// + Gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
// 2. useEffect(callback, [deps])

/* Chú ý Lý thuyết chung */
// + Callback luôn được gọi sau khi commonent mounted ( thuộc cả 3 trường hợp)




/// Liên Quan
// Events: Add / remove event listener
// --> Observer pattern: Subscribe/ unsubsribe
// Closure (hàm đóng trong javascript)
// Timers : SetInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted / unMounted
// ===
// Call API

// + Dùng hook effect khi sử dụng Side effects (nó đang nói tới 1 chương trình phần mềm , khi có 1 tác động xảy ra
// nó dẫn tới việc dữ liệu của chương trình bị thay đổi )

// UseEffect nó sẽ giúp ta:
// 1. Update DOM
//   - f8 blog title
// 2. Call API
// 3. Listen DOM events
//   - Scroll
//   - Resize
// 4. cleanup
// - Remove listener / Unsubcribe
// - Clear timer
// ===> tất cả đc gọi là side effect