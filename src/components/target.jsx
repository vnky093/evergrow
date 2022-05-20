import target from '../assets/images/target1.png';
import market from '../assets/images/marketplace.png';
const Target = () => {
	return (
		<div>
			<div className='target'>
				<section className='feature-section'>
					<div className='feature-container'>
						<h1>
							<b className='d-flex justify-content-center my-5'>
								Target Launch 2021
							</b>
						</h1>
					</div>
				</section>
			</div>
			<div className='target-row'>
				<div className='target-contents'>
					<div className='row '>
						<div className='col-md-5 '>
							<img className='tar-img' src={target} alt='' />
						</div>
						<div className='col-md-4 my-5 '>
							<p>
								EverGrow Coin is the next evolution of reflection token on the
								Binance Smart Chain (BSC): the first $BUSD reflection token to
								maximize your earnings both now & in the future. Simply hold
								$EGC in an eligible wallet* and automatically receive 8% $BUSD
								rewards from every transaction.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='target2'>
				<div className='target2-contents'>
					<div className='row'>
						<div className='col-md-6'>
							<img className='mark-img' src={market} alt='' />
						</div>
						<div className='col-md-6'>
							<section className='feature-section'>
								<div className='feature-container'>
									<h1>
										<b className='target-col2'>Target Launch 2022</b>
									</h1>
								</div>
							</section>

							<p className='my-5'>
								EverGrow Coin is the next evolution of reflection token on the
								Binance Smart Chain (BSC): the first $BUSD reflection token to
								maximize your earnings both now & in the future. Simply hold
								$EGC in an eligible wallet* and automatically receive 8% $BUSD
								rewards from every trans.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Target;
