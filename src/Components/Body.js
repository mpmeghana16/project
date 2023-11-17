import React, { useState } from 'react';
import Image from '../Image/download.jpg';
import ReactPlayer from 'react-player';

const Body = () => {
    const [likes, setLikes] = useState(0);
    function count() {
        setLikes(likes + 1);
    }

    const [text, setText] = useState('');
    function reset() {
        setText('');
    }
    const [texts, setTexts] = useState([
        { text: 'jujutshu kaisen' },
        { text: 'Onepiece' },
        { text: 'naruto' }
    ])
    const [index, setIndex] = useState(0)
    function change() {
        const newIndex = (index + 1) % texts.length
        setIndex(newIndex)
    }
    return (
        <div className='container'>
            <div className='image'>
                <img src={Image} alt="images" /> <br />
                <p className='para'>An image is a visual representation of something. An image can be a two-dimensional (2D) representation, such as a drawing, painting, or photograph, or a three-dimensional (3D) object, such as a carving or sculpture. <br /> <br /> likes: {likes}</p> <br />
                <button onClick={count} className='like-button'>Like</button>
            </div>
            <div className='inp'>
                <label htmlFor="Name">Name : </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <p>output : {text}</p>
                <button onClick={reset}>Reset</button>
            </div>
            <div>


            </div>
            <div>
                <div className='video'>
                    <ReactPlayer url={'https://www.youtube.com/watch?v=5FM4RLSs4Us&pp=ygUNdG9tIGFuZCBqZXJyeQ%3D%3D'} controls />
                </div>
                <div>
                    <p>Anime : {texts[index].text}</p>
                    <button onClick={change} className='change-button '>Change me</button>
                </div>
            </div>
        </div>
    );
};

export default Body;