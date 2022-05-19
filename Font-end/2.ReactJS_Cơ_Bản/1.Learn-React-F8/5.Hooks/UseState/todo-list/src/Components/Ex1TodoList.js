import { useState } from 'react'

export default function Ex1TodoList (){
    const [job, setJob] = useState('')
    const [ jobs, setJobs ] = useState(["Trường"])


    function handleChange (e){
        setJob(e.target.value)
    }

    const handleSubmit = () => {
        setJobs(prev => [...prev, job])
        setJob('') // khi add vào thì ô input đc clear
    }

    // Lưu vào local storage

    const handleSubmit = () => {
        setJobs(prev => {
            const newJobs = [...prev, job]

            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs', jsonJobs)

            return newJobs
        })

        setJobs('')
    }


    return(
        <div>
            <input value={job} onChange={handleChange}/>
            <button onClick={handleSubmit}>Add</button>


            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}

            </ul>
        </div>
    );
}


// Lưu ý: + Local storage nó chỉ cho lưu dữ liệu ở dạng chuỗi
