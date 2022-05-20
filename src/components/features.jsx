import burn1 from '../assets/images/burn1.png';
import burn2 from '../assets/images/burn2.png';
import burn3 from '../assets/images/burn3.png';
import burn4 from '../assets/images/burn4.png';

const Features = () => {
	return (
		<div>
			<div className='features'>
				<section className='feature-section'>
					<div className='feature-container'>
						<h1>
							<span className='d-flex justify-content-center my-5'>
								$EGC FEATURES
							</span>
						</h1>
					</div>
				</section>
			</div>
			<div className='feature-row'>
				<div className='row feature-contents my-5 mx-3'>
					<div className='col-md-3 '>
						<img src={burn1} alt='' />
						<h2 className='my-3'>$BUSD Reflections</h2>
						<p>
							Earn automatic Binance pegged USD ($BUSD), rewards by holding your
							EverGrow Coin – 8% of every buy, transfer and sell transaction is
							redistributed automatically to $EGC eligible holders*. You will
							receive the rewards automatically in your wallet or claim your
							rewards manually in our dApp Dashboard anytime.
						</p>
					</div>
					<div className='col-md-3'>
						<img src={burn2} alt='' />
						<h2 className='my-3'>$BUSD Reflections</h2>
						<p>
							Earn automatic Binance pegged USD ($BUSD), rewards by holding your
							EverGrow Coin – 8% of every buy, transfer and sell transaction is
							redistributed automatically to $EGC eligible holders*. You will
							receive the rewards automatically in your wallet or claim your
							rewards manually in our dApp Dashboard anytime.
						</p>
					</div>
					<div className='col-md-3'>
						<img src={burn3} alt='' />
						<h2 className='my-3'>$BUSD Reflections</h2>
						<p>
							Earn automatic Binance pegged USD ($BUSD), rewards by holding your
							EverGrow Coin – 8% of every buy, transfer and sell transaction is
							redistributed automatically to $EGC eligible holders*. You will
							receive the rewards automatically in your wallet or claim your
							rewards manually in our dApp Dashboard anytime.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
