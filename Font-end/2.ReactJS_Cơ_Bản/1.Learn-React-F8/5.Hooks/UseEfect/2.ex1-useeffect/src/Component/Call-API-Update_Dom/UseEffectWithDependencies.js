import { useEffect, useState } from 'react'

// 1. useEffect(callback)
// + Gọi callback  mỗi khi component render
// + Gọi callback sau khi component thêm element vào DOM
// 2. useEfect(callback, [])
// + Chỉ gọi callback 1 lần sau khi coponent mounted


const tabs = ['posts', 'comments', 'albums']


export default function UseEffectWithDependencies() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    console.log(type)


    useEffect(() => {
        // document.title = title
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(post => {
                setPosts(post)
            })
    }, [])

    return (
        <>
        {tabs.map((tab) => (
            <button 
            key={tab}
            style={type === tab ? {
                color: '#fff',
                backgroundColor: '#333'
            } : {}}
            // trong tình huống type = tab thì sẽ thêm css vào obj đầu nếu không thì sẽ là 1 obj rỗng
            onClick={() => setType(tab)} 
            >
                {tab}
            </button>
        ))}

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


