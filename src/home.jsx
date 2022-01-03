import React from 'react';
import { useNavigate, Link } from 'react-router-dom'

import { Navbar } from "./navbar"

import imagepdp from '../img/pdpgrosbaiseur.png'
import logosettingpost from '../img/setting_post_logo.svg'

export const Home = () => {

    // Afficher les posts
    const [ post, setPost ] = React.useState([])

    React.useEffect(() => {
    const request = {
    method: 'GET',
    credentials: 'include',
    headers: {}
    }

    fetch('http://localhost:5000/post', request)
    .then(response => response.json())
    .then(content => setPost(content))
    .catch(err => console.error(err))
    }, []);

    // Publier un post
    const [ message, setMessage ] = React.useState("")
    
    const publishPost = () => {
        const request = {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ message })
        }

        fetch('http://localhost:5000/post', request)
        .then(response => response.json())
        .then(content => setMessage(content))
        .catch(err => console.error(err))
	}

    // Like post
    const [ likers, setLikers ] = React.useState([])

    const likePost = (id) => {
    const request = {
    method: 'GET',
    credentials: 'include',
    headers: {}
    }

    fetch('http://localhost:5000/post/like-post/' + id, request)
    .then(response => response.json())
    .then(content => {
        console.log(content.likers)
    })
    .catch(err => console.error(err))
    };
    
    // Unlike un post
    const [ likes, setLikes ] = React.useState([])

    const unLikePost = (id) => {
    const request = {
    method: 'GET',
    credentials: 'include',
    headers: {}
    }

    fetch('http://localhost:5000/post/unlike-post/' + id, request)
    .then(response => response.json())
    .then(content => {
        console.log(content.likes)
    })
    .catch(err => console.error(err))
    };  


return (
<>

    <Navbar />

    <div className="main_home">
        <div className="central_part_home">

            <div className="box_for_write_post">
                <label className="label_for_post" htmlFor="story">Racontez votre vie ici :</label>
                <div className="input_for_post" type="submit" role="textbox" contentEditable onChange={e => setMessage(e.target.value)}></div>
                <button onClick={publishPost} type="submit" className="publish_a_post"> ✉ </button>
            </div>

            <div className="recent_post">
                <p className="title_recent">Posts récents de vos amis</p>
            </div>
            {post.map((p, index) => {
                const now = new Date(p.createdAt)
            return (
            <div className="card_for_post" key={index}>
                <div className="box_picture_name">
                    <div className="img_poster_poster"><img className="test_img" src={imagepdp} /></div>

                    <div className="name_date_post">
                        <p className="poster_name">{p.posterId}</p>
                        <p className="post_date">Publié le {now.toLocaleDateString("fr-FR")}</p>
                    </div>
                    <img className="logo_setting_post" src={logosettingpost}></img>
                </div>

                <div className="box_for_post">
                    <p className="text_for_post">{p.message}</p>
                </div>

                <div className="box_how_much_likes">
                    <p className="likes_text">Likes: </p>
                    <p className="number_of_likes">{p.likers.length}</p>

                    <div className="box_comment_likes">
                        <button className="btn_likes">
                            <p className="btn_likes_icon" onClick={e => likePost(p._id)}>♥</p>
                        </button>

                        <button className="btn_comment">
                            <p className="btn_comment_icon">🖉</p>
                        </button>

                    </div>
                </div>
            </div>
            )
            })}

        </div>
    </div>

</>
)
}