
import React from 'react'
import HeroBG from "../Assets/Hero_BG.jpg";
import "../styles/project.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
 
const images = [
    { id: '1',  imageName: 'Portfolio (1).png', tag: 'logos'  },
    { id: '2',  imageName: 'Portfolio (2).png', tag: 'posters/flyers' },
    { id: '3',  imageName: 'Portfolio (3).png', tag: 'website' },
    { id: '4',  imageName: 'Portfolio (4).png', tag: 'desktopApps' },
    { id: '5',  imageName: 'Portfolio (5).png', tag: 'mobileApps' },
    { id: '6',  imageName: 'Portfolio (6).png', tag: 'posters/flyers' } 

];
export default function Home() {
  const [tag, setTag] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);
  useEffect (
      () => {
          tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(images => images.tag === tag))
      }, 
      [tag]
  );
  
  const applyColumnWidth = (index) =>  {
   
    switch(index) {
        case 0:
            return "col-md-8";
         case 1:
            return "col-md-4";
         case 2:
            return "col-md-6";
         case 3:
            return "col-md-6";
         case 4:
            return "col-md-8";
         case 5:
            return "col-md-4";

         default:
            return "col-md-6";
    }

   }
  
  return (
    <>
    <div className='hero'>
      <img src={HeroBG} alt="hero_bg"/>
      <div className="header">
         <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src="assets/images/Assets/Logo.png"  alt="logo"/> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav ms-auto menu">
                    
                    <Link to="/home" className="link active"  >Home</Link>
            
                    <Link to="/about" className="link" >About Me</Link>
                    

                    <Link to="/work" className="link " >Works</Link>
                    
                    
                    <Link  to="/contact" className="link" >Contact Me</Link>
                    

                </div>
                </div>
            </div>
            </nav>
        </div>
      </div>

    <div className="graphic-design">
        <div className='row'>
            <div className='col-md-6'>
                <div className='text'>
                <h1>It’s me,Kishore..,</h1>
                <p>
                Never again be bored with your campaign designs! Take front row seats
                and choose Cannock’s one of a kind Daredevil Creative for your
                marketing projects
                </p>
                <p>
                We’re bold,brave and adventurous with the graphic designs we create.
                We push design boundaries and thrill-supreme by using bold colour,
                strong graphics and entertaining materials & finishes to help you tell
                your story.
                </p>
                <p>
                Sit back,relax and enjoy the communications ride with Daredevil
                Creative.Do you have the spirit of adventure? Thrill-seekers should
                contact the Daredevil Creative team on 01543 423 688.
                </p>
                <div className='btn'>
                    <button type='button' className='text-white'>Know More</button>
                </div>
                </div>

            </div>
            <div className='col-md-6'>
                <div className='design-img'>
                    <img  src="assets\images\Assets\Graphic_Designe_image.png"  alt="design-img"/> 
                </div>

                
            </div>
        </div>

    </div>
    <div className='projects' >
            <h1 className='text-center mb-5'>Projects</h1>
                    <div  handlesettag={"setTag"}>
                    
                        <TagButton tagActive={tag === 'all' ? true : false} name='all'    handlesettag={setTag} />
                        <TagButton tagActive={tag === 'logos' ? true : false} name='logos'   handlesettag={setTag} />
                        <TagButton tagActive={tag === 'websites' ? true : false} name='websites'   handlesettag={setTag} />
                        <TagButton tagActive={tag === 'desktopApps' ? true : false} name='desktopApps'   handlesettag={setTag} />
                        <TagButton tagActive={tag === 'mobileApps' ? true : false} name='mobileApps'   handlesettag={setTag} />
                        <TagButton tagActive={tag === 'posters/flyers' ? true : false} name='posters/flyers'   handlesettag={setTag} />
                        <div className='project-img row'>
                            {filteredImages.map((image, i)  => (
                            
                            <div key={image.id} className={`${applyColumnWidth(i)} mb-3`}  >
                            <a href={`/project/${image.imageName}`}>
                            <img className='image' src={`/project/${image.imageName}`}   alt=""/>
                        
                            </a>
                        </div>
                ))}
                        </div>
                          
                    </div>           
    </div>           
                

</>
  )
}
const TagButton = ({name, handlesettag, tagActive}) => {
  return <button className={`tag ${tagActive ? 'active' : null} tab`}   onClick={ () => handlesettag(name)}>
    { name.toUpperCase()}
    </button>
      
}