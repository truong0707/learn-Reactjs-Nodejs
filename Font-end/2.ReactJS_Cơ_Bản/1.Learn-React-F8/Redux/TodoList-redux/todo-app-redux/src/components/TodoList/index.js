import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useState } from 'react';

// import dispatch của redux để sử dụng:
// import sử dụng kho chung
import { useDispatch, useSelector } from "react-redux";
// import thằng action ở bên kia vào dùng
import { addTodo } from '../../Redux/actions';
// import uuid 
import { v4 as uuidv4 } from 'uuid';


export default function TodoList() {
  const [todoName, setTodoName] = useState('')


  const todoList = useSelector((state) => state.todoList);  // dùng useSelector lấy ra dữ liệu trong  kho
  console.log({ todoList })

  // lấy ra thằng đispatch 
  const dispatch = useDispatch();


  const handleInputchange = (e) => {
    console.log(e.target.value)
    setTodoName(e.target.value)
  }



  const handleAddButtonClick = () => {
    // sử dụng dispatch() của redux
    dispatch(addTodo({ // các thông của thẻ input, nội dung lựa chọn độ ưu tiên
      id: uuidv4,
      name: todoName, // lấy ra giữ liệu từ input
      priority: '',
      completed: false
    }))

    // reset ô
    setTodoName('')
  }


  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {todoList.map(todo  => (
           <Todo key={todo.id} name={todo.name} />
        ))}

        
      </Col>


      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputchange} />  


          <Select defaultValue="Medium">
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>

          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}


// 59:50