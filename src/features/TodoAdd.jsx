import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../recoil_state';

const TodoAdd = () => {
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    let isDisabled = [title,content].every(Boolean)
    const setTodoList = useSetRecoilState(todoListState)
    const handleSubmit = (e) => {
        if(isDisabled){
            setTodoList(item => [
                ...item,
                {
                    id:nanoid(),
                    title,
                    content,
                    isComplete:false
                }
            ])
        }
        setTitle('')
        setContent('')
        e.preventDefault();
    }
  return (
    <Form className="p-2" onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="title">Post Title</Label>
        <Input
          name="title"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="content">Post Title</Label>
        <Input
          name="content"
          type="text"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </FormGroup>
      <Button block color="primary" disabled={!isDisabled}>
        Add Post
      </Button>
    </Form>
  )
}

export default TodoAdd