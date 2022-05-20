import left from '../assets/images/Plaque_Left.png';
import tokenomics from '../assets/images/tokenomics.png';
const Tokenomics = () => {
	return (
		<div className='tokenomics'>
			<div className='theam-contentt'>
				<div className='row'>
					<div className='col-sm-1 imgg align-items-center'>
						<img className='left-img' src={left} alt='' />
					</div>
					<div className='col-sm-10'>
						<div className='row'>
							<div className='col-sm-6'>
								<h1>
									<b>TOKENOMICS</b>
								</h1>
								<p>
									EverGrow Coin is the next evolution of reflection token on the
									Binance Smart Chain (BSC): the first $BUSD reflection token to
									maximize your earnings both now & in the future. Simply hold
									$EGC in an eligible wallet* and automatically receive 8% $BUSD
									rewards from every transaction.
								</p>
							</div>
							<div className='col-sm-4'>
								<img className='tokenimg' src={tokenomics} alt='' />
							</div>
						</div>
						<p>
							Any transaction between two wallets is taxed 14% by the contract
							and distributed as above. *For those investing in $EGC via
							centralized exchanges, the taxation and rewards system may differ.
							Visit www.evergrowcoin.com/exchanges for more information.
						</p>
						<p>
							Any transaction between two wallets is taxed 14% by the contract
							and distributed as above. *For those investing in $EGC via
							centralized exchanges, the taxation and rewards system may differ.
							Visit www.evergrowcoin.com/exchanges for more information.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tokenomics;
