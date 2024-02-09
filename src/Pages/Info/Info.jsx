import React, { useEffect, useState } from 'react';
import './Info.css'
import action from '../../Assets/action.png'
import Drama from '../../Assets/drama.png'
import Romance from '../../Assets/Romance.png'
import Thriller from '../../Assets/Thriller.png'
import Western from '../../Assets/Western.png'
import Horror from '../../Assets/Horror.png'
import Fantasy from '../../Assets/Fantasy.png'
import Music from '../../Assets/Music.png'
import Fiction from '../../Assets/Fiction.png'
import alert from '../../Assets/alert.png'
import { useNavigate } from 'react-router-dom';
const genres = [
    {
        id: "Action",
        color: "#FF5209",
        image: <img src={action} />
    },
    {
        id: "Drama",
        color: "#D7A4FF",
        image: <img src={Drama} />
    },
    {
        id: "Romance",
        color: "#148A08",
        image: <img src={Romance} />
    },
    {
        id: "Thriller",
        color: "#84C2FF",
        image: <img src={Thriller} />
    },
    {
        id: "Western",
        color: "#902500",
        image: <img src={Western} />
    },
    {
        id: "Horror",
        color: "#7358FF",
        image: <img src={Horror} />
    },
    {
        id: "Fantasy",
        color: "#FF4ADE",
        image: <img src={Fantasy} />
    }, {
        id: "Music",
        color: "#E61E32",
        image: <img src={Music} />
    },
    {
        id: "Fiction",
        color: "#6CD061",
        image: <img src={Fiction} />
    }
]

function Info(props) {
    let [category, setCategory] = useState([]);
    const navigate = useNavigate();

    function handleSelection(genreId) {
        if (!category.includes(genreId)) {
            setCategory(prevCategory => [...prevCategory, genreId]);
        }
    }
    function moveToUser() {
        console.log("navigation button clicked");
        console.log(category.length)
        category.length >= 3 ? navigate('/user'): null ;
        window.localStorage.setItem("category",JSON.stringify(category))
    }
    
    useEffect(() => {

    }, [category]);

    return (
        <div className='movies'>
            <div className="movie-container">
                <div className="selected-movie" >
                    <h1 className='super-app'>Super app</h1>
                    <h1 className='category-heading'>Choose your <br /> entertainment <br />category</h1>
                    <div className='selectedMovies' >
                        {category.map(item => (
                            <span key={item}>{item} x</span>
                        ))}
                        {category.length < 3 ? <div className='alert'><img src={alert} alt="" width="20px" />Minimum 3 category required</div> : null}
                    </div>

                </div>
                <div className="movies-list" >
                    <div className="movie-box ">
                        {genres.map(genre => (
                            <div key={genre.id}
                                onClick={() => handleSelection(genre.id)}
                                style={{ backgroundColor: genre.color }}
                                className='movie-item'>
                                <p>{genre.id}</p>
                                {genre.image}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="next-btn">
                <button onClick={moveToUser}>Next Page</button>
            </div>
        </div>
    );
}
export default Info;