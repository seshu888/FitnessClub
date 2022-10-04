import './wcu.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import tick from '../../assets/tick.png';
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
const WCU = () => {
	return (
		<div className="wcu" id="WCU">
			<div className="zim-poses">
				<img src={image1} alt="" />
				<img src={image2} alt="" />
				<img src={image3} alt="" />
				<img src={image4} alt="" />
			</div>
			<div className="wcu-reasons">
				<span className="wcu-desc">Some Reasons</span>
				<h1 className="stroke-text-wcu">Why choose us ?</h1>
				<div className="wcu-details">
					<div>
						<img src={tick} alt="" />
						<span>OVER 140+ EXPERT COACHES</span>
					</div>
					<div>
						<img src={tick} alt="" />
						<span>TRAIN SMARTER AND FASTER THAN BEGINNERS</span>
					</div>
					<div>
						<img src={tick} alt="" />
						<span>1 FREE PROGRAM FOR NEW MEMBER</span>
					</div>
					<div>
						<img src={tick} alt="" />
						<span>RELIABLE PARTNERS</span>
					</div>
					<div className='partners'>
						<span
							style={{
								color: 'var(--gray)',
								fontWeight: 'normal'
							}}
						>Our Partners</span>
                        <div className='partners-logo'>
                            <img src={nb} alt="" />
                            <img src={adidas} alt="" />
                            <img src={nike} alt="" />
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default WCU;
