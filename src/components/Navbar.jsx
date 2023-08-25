import { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { CgClose } from "react-icons/cg";

function Navbar() {
	const [showMenu, setShowMenu] = useState(false);
	const toggleMenu = () => setShowMenu(!showMenu);
	return (
		<header className="padding-x py-8 absolute z-10 w-full">
			<nav className="flex justify-between items-center max-container">
				<a href="/">
					<img src={headerLogo} alt="logo" width={130} height={29} />
				</a>

				<ul className="flex-1 flex justify-center item-center gap-16 max-lg:hidden">
					{navLinks?.map((link) => (
						<li key={link?.label}>
							<a
								href={link?.href}
								className="font-montserrat leading-normal text-lg text-slate-gray">
								{link?.label}
							</a>
						</li>
					))}
				</ul>
				<div
					className="hidden max-lg:block cursor-pointer"
					onClick={toggleMenu}>
					{!showMenu ? (
						<img src={hamburger} alt="hamburger" width={25} height={25} />
					) : (
						<CgClose size={25} />
					)}
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
