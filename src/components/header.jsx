import { useState } from 'react';
import './header.css';
const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<div className='Header'>
				<div className='custom-shape-divider-top-1652779218'>
					<svg
						data-name='Layer 1'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 1200 120'
						preserveAspectRatio='none'>
						<path
							d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
							class='shape-fill'></path>
					</svg>
				</div>
				<div className='heder-item'>
					<div className='Navbar'>
						<span className='nav-logo'>DevLHB</span>
						<div className={`nav-items ${isOpen && 'open'}`}>
							<a href='/home'>Home</a>
							<a href='/about'>About</a>
							<a href='/service'>Service</a>
							<a href='/contact'>Contact</a>
						</div>
						<div
							className={`nav-toggle ${isOpen && 'open'}`}
							onClick={() => setIsOpen(!isOpen)}>
							<div className='bar'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
