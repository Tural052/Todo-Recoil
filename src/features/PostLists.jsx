import React, { useState } from 'react'
import { Input, Card, CardText, CardTitle, Button } from "reactstrap";
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil_state';




const PostLists = ({ item }) => {
    const [todos, setTodos] = useRecoilState(todoListState)
    const index = todos.findIndex((listItem) => listItem === item);
    const [editButton, setEditButton] = useState(false)

    const removeItemAtIndex = (arr, index) => {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
    }
    const replaceItemAtIndex = ((arr, index, newValue) => {
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    })

    const deleteItem = () => {
        const newList = removeItemAtIndex(todos, index)
        setTodos(newList)
    }
    const editItemTextTitle = ({target:{value}}) => {
        const newList = replaceItemAtIndex(todos, index, {
            ...item,
            title:value,
        });

        setTodos(newList);
    }
    const editItemTextContent = ({target:{value}}) => {
        const newList = replaceItemAtIndex(todos, index, {
            ...item,
            content:value,
        });

        setTodos(newList);
    }
    return (
        <div>
            <Card className="m-2" key={item.id}>
                {editButton ?
                    <>
                        <Input type="text" name="title" className='m-2' placaholder="title" value={item.title} onChange={editItemTextTitle} />
                        <Input type="text" name="contnet" className='m-2' placaholder="content" value={item.content} onChange={editItemTextContent} />
                    </> :
                    <>
                        <CardTitle className="m-2">
                            {item.title}
                        </CardTitle>
                        <CardText className="m-2">{item.content}</CardText>
                    </>}
                <Button color="danger" className="m-2" onClick={deleteItem}>
                    Delete
                </Button>
                <Button className='m-2' onClick={() => {
                    setEditButton(!editButton)
                }}>
                    {editButton ? "Save" : "Edit"}
                </Button>
            </Card>
        </div>
    )
}

export default PostLists

