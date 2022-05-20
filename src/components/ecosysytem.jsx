import eco from '../assets/images/ecosystem.png';
import arrow from '../assets/images/Arrows.png';
import left from '../assets/images/Plaque_Left.png';
const Ecosystem = () => {
	return (
		<div>
			<div className='ecosystem'>
				<section className='feature-section'>
					<div className='feature-container'>
						<h1>
							<b className='d-flex justify-content-center my-5'>
								$EGC FEATURES
							</b>
						</h1>
					</div>
				</section>
			</div>
			<div className='ecosystem-row'>
				<div className='ecosystem-contents'>
					<div className='row my-5'>
						<div className='col-md-5'>
							<img className='eco-img' src={eco} alt='' />
						</div>
						<div className='col-md-7'>
							<h2 className='my-3'>$BUSD Reflections</h2>
							<p>
								Earn automatic Binance pegged USD ($BUSD), rewards by holding
								your EverGrow Coin – 8% of every buy, transfer and sell
								transaction is redistributed automatically to $EGC eligible
								holders*. You will receive the rewards automatically in your
								wallet or claim your rewards manually in our dApp Dashboard
								anytime.
							</p>
						</div>
					</div>
					<div className='row'>
						<div className='col-sm-1 imgg align-items-center'>
							<img className='left-img' src={left} alt='' />
						</div>
						<div className='col-sm-10'>
							<div className='row'>
								<div className='col-sm-6'>
									<h1>
										<b>dApp and Swap Exchange</b>
									</h1>
									<p>
										EverGrow Coin is the next evolution of reflection token on
										the Binance Smart Chain (BSC): the first $BUSD reflection
										token to maximize your earnings both now & in the future.
										Simply hold $EGC in an eligible wallet* and automatically
										receive 8% $BUSD rewards from every transaction.
									</p>
								</div>
								<div className='col-sm-4'>
									<img className='tokenimg' src={arrow} alt='' />
								</div>
							</div>
							<p>
								Any transaction between two wallets is taxed 14% by the contract
								and distributed as above. *For those investing in $EGC via
								centralized exchanges, the taxation and rewards system may
								differ. Visit www.evergrowcoin.com/exchanges for more
								information.
							</p>
							<p>
								Any transaction between two wallets is taxed 14% by the contract
								and distributed as above. *For those investing in $EGC via
								centralized exchanges, the taxation and rewards system may
								differ. Visit www.evergrowcoin.com/exchanges for more
								information.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Ecosystem;
