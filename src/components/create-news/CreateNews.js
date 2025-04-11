import { useState } from 'react';
// import axios from 'axios';
import api from '../../services/api';

function CreateNews(props) {
    // const [title, setTitle] = useState('this is my default title');
    // const [slug, setSlug] = useState();

    const [state, setState] = useState({
        title: '',
        slug: undefined,
        text: '',
    })

    const addNews = () => {
        api.post('/novice', {
            ...state
        })
            .then(res => console.log('result: ', res))
            .catch(err => console.error('error: ', err));
    }

    return (
        <div className='create-news'>
            <div className='container'>
                <h1>Add News</h1>

                <input type='text' placeholder='Title'
                    onChange={({ target: { value: inputTitle } }) => setState(prevState => ({ ...prevState, title: inputTitle }))}
                    value={state.title} />

                <p>Title: {state.title}</p>

                <input type='text' placeholder='Slug'
                    onChange={({ target: { value: inputSlug } }) => setState(prevState => ({ ...prevState, slug: inputSlug }))} />

                <p>Slug: {state.slug}</p>

                <textarea placeholder='Enter your news here'
                    onChange={({ target: { value: inputText } }) => setState(prevState => ({ ...prevState, text: inputText }))} />
                <p>News Text: {state.text}</p>
                <button onClick={() => addNews()}>Create News</button>
            </div>
        </div>
    )
}

export default CreateNews;