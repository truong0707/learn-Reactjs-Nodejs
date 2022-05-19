import { useState } from 'react'


// Thêm


export default function Ex5ChangeInfo () {
    const [info, setInfo] = useState({
        name: 'Nguyễn Thanh Trường',
        age: 20,
        address: 'Đà Nẵng, VN'
    })

    const handleUpdate = () => {
        setInfo(prev => {
            return {
                ...prev,
                bio: 'Yêu màu hồng'
            }
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