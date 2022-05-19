import { useEffect, useState } from 'react'

// 1. useEffect(callback)
// + Gọi callback  mỗi khi component render
// + Gọi callback sau khi component thêm element vào DOM
// 2. useEfect(callback, [])
// + Chỉ gọi callback 1 lần sau khi coponent mounted
// 3. useEffect(callback, [deps])
// + Call back sẽ đc gọi lại mỗi khi deps thay đổi
//----------------------------------------

/* Chú ý Lý thuyết chung */
// + Callback luôn được gọi sau khi commonent mounted ( thuộc cả 3 trường hợp)


const tabs = ['posts', 'comments', 'albums']


export default function ExScroll() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`) //  ` ` template string
            .then(res => res.json())
            .then(post => {
                setPosts(post)
            })
    }, [type])


    useEffect(() => {
        // Listen DOM events

        const handleScroll = () => {
            console.log(window.scrollY)
            if (window.scrollY >= 200) {
                setShowGoToTop(true)
                console.log('set State')
            } else {
                setShowGoToTop(false)
            }
        }

        window.addEventListener('scroll', handleScroll) // gặp vấn đề bị rò rỉ bộ nhớ
    },[])


    return (
        <>
            {tabs.map((tab) => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                    // trong tình huống type = tab thì sẽ thêm css vào obj đầu nếu không thì sẽ truyền 1 obj rỗng
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}

            <h1>Xinchao2</h1>
            <input value={title} onChange={e => setTitle(e.target.value)}></input>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>


            {/*  nút render */}
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}
                >
                    Go to Top
                </button>
            )}
        </>

    );
}








// Có 3 Trường hợp sử dụng effect:

// 1. useEffect(callback) (ít sài)
// + Gọi callback  mỗi khi component render
// + Gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
// 2. useEffect(callback, [deps])




