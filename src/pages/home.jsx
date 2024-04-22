import React from 'react';
import logoa from '../images/eaf.png';
import pant from '../images/plant2.jpg';
import group from "../images/teampic.jpeg"
import Card from '../card';
import './home.css';
import { FiArrowLeft, FiMenu } from 'react-icons/fi'
import Shubhay from '../images/our team/Shubhay.jpg'
import Shashvat from '../images/our team/Shashvat.jpg'
import Anmol from '../images/our team/Anmol.jpg'
import Sumitsir from '../images/our team/Sumit sir.jpg'
import Bhumil from '../images/our team/Mee.png'
function Home() {
    let  flag=false;

  const Menudis=()=>{
    if(flag==false){
    document.getElementById("menu").style.display = "inline-flex";
    document.getElementById("nav").style.display = "none";
   

    
   flag=true; 
  }else if(flag==true){
    document.getElementById("menu").style.display = "none";
    document.getElementById("nav").style.display = "inline-flex";
    
    flag=false;
  }
  }
  
  

  return <>
  <div  className='scrollwatcher'></div>
        <div  id="menu">
          <ul id='links'>
         <li> <FiArrowLeft id="leftarrow"  onClick={Menudis} /></li>
         <a onClick={Menudis} href="#about"><li>About Us</li></a>
         <a onClick={Menudis} href="#child"><li>We Pioneered</li></a>
         <a onClick={Menudis} href="#team"><li>Team Info</li></a>
         <a onClick={Menudis} href=""><li>Achivements</li></a>
          </ul>
        </div>
      <div id="nav" className='Navbar'>
      
      <FiMenu onClick={Menudis} id="Mbtn" className="Menubtn" />
      
      
      <img className='logo' alt='Logo Ban raha hai' src={logoa} ></img>
      <button >Connect With Us</button>
     </div>


     <h1 className='h1' id='about' > ABOUT US<hr></hr></h1>
    <div className='About'>
      
      <img  src={pant}></img>
      <div className='arti'>
      <article >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis molestias expedita repudiandae, nulla officiis necessitatibus tempore labore non numquam recusandae quasi ab maxime ad impedit natus assumenda quas obcaecati dignissimos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam deserunt amet repudiandae soluta repellat dolorem assumenda commodi totam est aut quos placeat aliquid minima dignissimos, neque architecto. Fuga, labore!
      Repellat ipsa adipisci dolores facilis sit eos maxime soluta provident cumque, quos impedit eum velit totam aliquam doloribus illum saepe accusamus temporibus possimus repellendus. Optio dolore explicabo itaque rerum alias.
      Molestiae debitis, fugiat quia quos distinctio cumque exercitationem quo minus voluptas alias eos aliquam dolore, sapiente dicta dolores architecto ad nobis nemo, eligendi sequi? Dolores officiis veniam fugiat cum. Voluptas.
      Quaerat, molestias vero numquam quae tenetur sunt iste veniam perferendis a. Voluptate aspernatur in explicabo error ducimus, facilis quod facere natus pariatur dicta ullam alias ipsum dignissimos, modi magni sunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto minus cum id aspernatur exercitationem veniam alias laborum. Nisi debitis harum nesciunt quisquam dolor, amet eveniet doloribus rem consequuntur! Nostrum, sit.
      Debitis illum explicabo ullam architecto fuga optio velit odit a sit neque rerum modi, quasi, accusamus voluptate. Magnam hic sint possimus tempore placeat ea, at corrupti quos sed laborum ipsa.
      Nesciunt voluptates necessitatibus exercitationem dolor porro nobis dolore in, cupiditate est? Eligendi quas vel blanditiis, dolores voluptatibus assumenda repudiandae dicta odio eius sunt corrupti nisi aut impedit quam pariatur quae!
      Sapiente ratione, unde obcaecati quae earum saepe id totam perferendis velit vero tenetur error quidem libero soluta molestias enim assumenda atque. Odio obcaecati mollitia nobis debitis dolorum veniam non animi.
      Quibusdam dolorum placeat tempore nemo cupiditate possimus tenetur nesciunt, eaque non, vitae, ab atque quaerat omnis illum vel provident quo beatae vero asperiores! Odio voluptate fugiat unde minima labore? Tempore!
      Cum, quam excepturi quo voluptatem ab molestias libero aliquam explicabo sint maiores culpa quisquam tenetur sunt eius enim soluta doloribus? Blanditiis laudantium accusantium assumenda aliquam voluptatibus laboriosam repellendus totam doloremque?
      Numquam, accusamus deleniti impedit nesciunt doloremque similique ullam sed rem quam iure saepe expedita, autem assumenda maiores quo ad reprehenderit officiis aperiam. Distinctio deleniti rem hic molestias voluptate dignissimos ipsa!
      Ex dolores nobis fugiat amet quo autem non atque et facere ad, voluptates voluptatibus reprehenderit quod modi delectus tenetur excepturi incidunt. Consequatur reiciendis asperiores impedit harum unde nemo, ad animi?
      Enim obcaecati cumque maiores officiis provident eaque rerum, architecto aperiam voluptas nam nostrum necessitatibus sed saepe, minima adipisci soluta libero voluptatum nisi odit aliquid magni ipsum eius nihil? Culpa, libero.
      Illum minima voluptate ea? Ea error quasi nostrum impedit dignissimos delectus, iure distinctio saepe quia aperiam ut, non aut alias ratione. Error delectus qui hic autem beatae adipisci voluptatibus quisquam!
    
   </article>
   </div>
   </div> 
  
  <div className="ChildCom" id='child'>
    <div className="aboutCom">
      <h1>We Pioneered<hr></hr></h1>
      <div className="clogo">
        <div className="logoinfo">
         <h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequatur est earum asperiores quae veritatis officia animi dignissimos ipsum. Error libero architecto eveniet vitae ut magnam sequi, laudantium corrupti maiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam unde tempora neque temporibus, accusamus aspernatur odit enim facilis eligendi eveniet laboriosam maiores nemo tenetur consequuntur, tempore necessitatibus fuga est? Vitae?
          Velit facere alias itaque facilis quisquam assumenda ab accusantium libero esse at, voluptatibus cum enim fugit corrupti, eligendi nobis iste temporibus ad repellendus asperiores animi illum aut officiis? Perspiciatis, illum?<br /><br /><br />
            VISIT US : <a href='http://localhost:3000/'>Mr Gardenr</a>
          </h3>
        </div>
      </div>

      </div>
  </div>

  <div className="Team" id='team'>
  <h1>Our Team<hr></hr></h1>
  <div className='carddiv'>
    <Card src={Shubhay} name="Shubhay Agrawal" info="Sab kuch aata hai" /><Card src={Sumitsir} name="Sumit Bhati" info="Sabke boss but cool hai" /><Card src={Shashvat} name="Shashvat Sheth" info="Billi Premii " />
  </div>
  <div className='carddiv2'>
    <Card src={Bhumil} name="Bhumil Shah" info="Bhai good hai" /><div id='card'><h2>Dev Team</h2><br />Info About our dev-team. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic qui, laboriosam ipsam reiciendis, facere unde dolorum, magni nobis sed nihil quis aperiam consectetur animi maiores suscipit doloremque fuga consequuntur veniam.
    At nobis fugit eos quod debitis, quis, rerum error sequi ad, laborum autem consectetur! Ratione vel neque consequatur nihil deleniti? Soluta aut enim eligendi, repudiandae eos asperiores at maxime eaque?
    Hic saepe ad accusamus quibusdam ratione itaque soluta pariatur voluptatum? Accusamus cupiditate obcaecati, itaque nam necessitatibus ipsam modi quibusdam autem velit tempora amet quos rem illum praesentium in quae dolor?</div><Card src={Anmol} name="Anmol Giri" info="Photugrapher , Girafic Dejiner and 69 others" />
  </div>
  </div> 
  <div className='achive'>

    
  </div> 
  <div className="achivements">
    <div className="achcard"></div>
  </div>

  <div className="footer">
    <div className="top">
      <div><h2 style={{margin:0}} >Join Our Community</h2><p>A-2 908,Pallidium Tower, Corporate Road,<br />
Makarba,Ahmedabad-380051<br /> 
Community@ecovibes.com</p></div><div><h2>Business Hours</h2><p>Mon-fri : 9:30 AM to 6:30 PM</p></div>

    </div>
    <div className="bottom">
    <h1>Eco Vibes Green India <sup>&#169;</sup></h1>
    </div>
  </div>
  
    </>
  
}

export default Home;