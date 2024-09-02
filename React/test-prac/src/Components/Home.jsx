import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
function Home({ myBlogs }) {
    const [blogs, setBlogs] = useState([]);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');


    useEffect(() => {
        setBlogs(myBlogs);
    }, [])


    const DeleteOne = (id) => {
        setBlogs(blogs.filter((val) => val.id !== id));
    }


    const AddnewTodo = () => {
        console.log(author);
        console.log(text);
            
            setBlogs([...blogs,{
                id: uuidv4(),
                author,
                text
            }]);
            setText("");
            setAuthor("");
    }
    return (
        <div>
            <Link to='/'>Go to Dashboard</Link>
            {
                blogs.map((item) => (
                    <div >
                        <h4>{item.id}</h4>
                        <h1>{item.author}</h1>
                        <h2>{item.text}</h2>
                        <button onClick={() => DeleteOne(item.id)}>DeleteNow</button>
                        <hr />
                    </div>
                ))

            }
            <br />
            <br />
            <h1>Add a new Blog</h1>
            <div >
                <div>
                    <label htmlFor="author">Author</label>
                    <input type="text" id='author' value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <br />
                
                <div>
                    <label htmlFor="text">Text:</label>
                    <input type="text" id='text'value={text}
                    onChange={(e)=>setText(e.target.value)}
                    />
                </div>
                <br />
                <button onClick={AddnewTodo}>Add Now</button>
            </div>
        </div>
    )
}

export default Home