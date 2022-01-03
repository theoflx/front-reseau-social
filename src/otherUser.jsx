import { Navbar } from "./navbar"

import imagepdp from '../img/pdpgrosbaiseur.png'

export const OtherUser = () => {
return(
<>
    <Navbar />

    <div className="other_user_page">

        <div className="left_part_other_user_page">
            <div className="box_img_other_user">
                <img className="img_profil" src={imagepdp}></img>
            </div>

            <div className="box_btn_other_user">
                
            </div>
        </div>

        <div className="right_part_other_user_page">

        </div>
    </div>
</>
)
}