import React from 'react';
import image from "../img/SocialPlace.png"
import { useNavigate, Link } from 'react-router-dom'


export const RegisterPage = () => {

    const [ email, setEmail ] = React.useState("")
    const [ pseudo, setPseudo ] = React.useState("")
    const [ password, setPassword ] = React.useState("")

    const navigate = useNavigate()
    
    const handleSubmit = () => {
        const request = {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ email, pseudo, password })
        }

        fetch('http://localhost:5000/auth/register', request)
        .then(response => response.json())
        .then(content => {
            if(content) {
                navigate('/login')
            } else {
                return (err)
            }
        })
        .catch(err => console.error(err))
		}
    

return (

<div className="login_page">

    <img className="logo_login_page" src={image} />

    <div className="box_login box_linear">

            <h1 className="register_text">Inscrivez-vous</h1>

            <div className="box_input_login">
                <div className="box__email_input_login">
                    <label className="label_signin_email">Entrez votre E-mail</label>
                    <input className="input_signin_email" onChange={(e) => setEmail(e.target.value)} type="email"></input>
                </div>

                <div className="box__pseudo_input_pseudo">
                    <label className="label_signin_pseudo">Entrez votre pseudo</label>
                    <input className="input_signin_pseudo" onChange={(e) => setPseudo (e.target.value)} type="text"></input>
                </div>

                <div className="box__password_input_login">
                    <label className="label_signin_password">Entrez votre mot de passe</label>
                    <input className="input_signin_password" onChange={(e) => setPassword(e.target.value)} type="password"></input>
                </div>
            </div>

            <div className="box_btn_login">
              
                <button className="btn_register" onClick={() => navigate('/login')} type="submit">Dejà inscrit ?</button> 
                <button className="btn_login" onClick={handleSubmit} type="submit">S'inscrire</button>
            </div>
    </div>

</div>
)
}