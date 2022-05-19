import { useState } from 'react'


// Thay thế 


export default function Ex4ChangeInfo () {
    const [info, setInfo] = useState({
        name: 'Nguyễn Thanh Trường',
        age: 20,
        address: 'Đà Nẵng, VN'
    })

    const handleUpdate = () => {
        setInfo({
            bio: 'Yêu màu hồng'
        })
     }

    return(
        <div> 
            <h1>{JSON.stringify(info)}</h1> {/* (*) */}
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
}

//  (*)  thằng innitial State nó ko nhận Ojb nên chuyển nó về thành chuỗi