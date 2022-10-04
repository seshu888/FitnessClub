import './plans.css';
import  {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
	return (
		<div className="plans">
            <div className='blur plans-blur-1'></div>
            <div className='blur plans-blur-2'></div>
			<div className="plans-header">
				<span className='stroke-text'>READY TO START </span>
				<span>YOUR JOURNEY</span>
				<span className='stroke-text'>NOW WITH US</span>
			</div>
			<div className="plans-cards">{
                plansData.map((plan,i)=>{
                    return <div className='plan' key={i}>
                                {plan.icon}
                                <span>{plan.name}</span>
                                <span>${plan.price}</span>
                                <div className='featuress'>
                                    {plan.features.map((feature,i)=>{
                                        return <div className='feature' key={i}>
                                                    <img src={whiteTick} alt=""/>
                                                    <span key={i}>{feature}</span>
                                                </div>

                                    })}
                                </div>  
                                <span>see more -> </span> 
                                <button className='btn'>Join Now</button>
                            </div>
                })
            }</div>
		</div>
	);
};
export default Plans;
