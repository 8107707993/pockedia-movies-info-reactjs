import React,{useState} from 'react';
import './CompoStyle.css';

const ScrollTotop = () => {
    const [upVisible, setUpVisible] = useState(false)
    const [downVisible, setDownVisible] = useState(true)

    // const downToggleShow =() =>{
    //     const scrolledd = document.documentElement.scrollTop;
    //     
    //     if (scrolledd > 0) {
    //         setDownVisible(false);
    //         circleBtnDown.classList.add("circleButtonDown-show");
    //         circleBtnDown.classList.remove("circleButtonDown");
    //     } else if(scrolledd <= 0) {
    //         setDownVisible(true);
    //         circleBtnDown.classList.add("circleButtonDown");
    //         circleBtnDown.classList.remove("circleButtonDown-show");
    //     }
    // }
    const upToggleShow =()=>{
        const scrolled = document.documentElement.scrollTop;
        const circleBtnUp = document.getElementById('circlebtnUp');
        const circleBtnDown = document.getElementById('circlebtnDown');
        if (scrolled >= 500) {
            setUpVisible(true)
            setDownVisible(false)
            circleBtnUp.classList.add("circleButton-show");
            circleBtnUp.classList.remove("circleButton");
            circleBtnDown.classList.add("circleButtonDown");
            circleBtnDown.classList.remove("circleButtonDown-show");
        } else {
            setUpVisible(false)
            setDownVisible(true)
            circleBtnUp.classList.remove("circleButton-show");
            circleBtnUp.classList.add("circleButton");
            circleBtnDown.classList.add("circleButtonDown-show");
            circleBtnDown.classList.remove("circleButtonDown");
        }
    }

    const scrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        }
        )
    }
    const scrollToBottom=()=>{
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior:'smooth'
        })
    }
    window.addEventListener('scroll', upToggleShow);
    
    return (
        <div>
            <button id="circlebtnUp" className="circleButton">
                <i className="fas fa-angle-double-up" onClick={scrollToTop} style={{display:upVisible ? 'inline':'none'}}>
                </i>        
            </button>
            <button id="circlebtnDown" className="circleButtonDown">
                <i className="fas fa-angle-double-down" onClick={scrollToBottom} style={{display:downVisible ? 'inline':'none'}}>
                </i>        
            </button>
            
        </div>
    )
}

export default ScrollTotop
