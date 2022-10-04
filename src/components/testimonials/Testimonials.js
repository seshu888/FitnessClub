import './testimonials.css';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { useState } from 'react';
import { testimonialsData } from '../../data/testimonialsData';
const Testimonials = () => {
    const [ind,setInd] = useState(0)
	const [ selected, setSelected ] = useState(testimonialsData[ind]);

	const tLength = testimonialsData.length;

	const handleArrow = (type) => {
        
		console.log(ind)
		if (type === 'next') {
                let newInd= tLength-1<ind+1 ? 0:ind+1;
                setSelected(testimonialsData[newInd])
                setInd(newInd)
		} else {
            let newInd= ind-1>=0?ind-1:tLength-1;
            setSelected(testimonialsData[newInd])
            setInd(newInd)
		}
	};
	return (
		<div className="testimonials">
		<div className='blur testi-blur'></div>
			<div className="rightside-testi">
				<span className="testi-intro-head">Testimonials</span>
				<span className="stroke-text-testi">WHAT THEY</span>
				<span className="testi-heading">SAY ABOUT US</span>
				<span className="testi-desc">{selected.review}</span>
				<span className="about-customer">
					<b>{selected.name}</b>- {selected.status}
				</span>
			</div>
			<div className="leftside-testi">
				<div className="border-shadow" />
				<div className="fill-shadow" />
				<img src={selected.image} alt="" className="testi-progile-pic" />
				<div className="arrows">
					<img onClick={() => handleArrow('prev')} src={leftArrow} alt="" />
					<img onClick={() => handleArrow('next')} src={rightArrow} alt="" />
				</div>
			</div>
		</div>
	);
};
export default Testimonials;
