import cloud9 from '../../public/cloud91.svg';
import './styles.css';

const Navbar = () => {
	// const {theme, toggleTheme} = useTheme();
	// const toggleMode = () => {
	//     toggleTheme();
	//   };
	return (
		<nav className="navbar__container">
			<div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
				<a href="#" target="_blank">
					<img src={cloud9} className="logo" alt="cloud9 logo" />
				</a>
                <h3>Cloud9</h3>
			</div>
			<div>
				<div className="mode-switch">
					<ul className="navlist__container">
						<li className="navlist__items">
							<a href="/">Home</a>
						</li>
						<li className="navlist__items">
							<a href="/architecture">Architecture</a>
						</li>
					</ul>
					<label>
						<input
							type="checkbox"
							// onChange={toggleMode}
							// checked={theme === "dark"}
						/>
						<span className="slider round"></span>
					</label>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
