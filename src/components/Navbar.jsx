import { useState, useEffect } from "react";
import { headerLogo } from "../assets/images";
import { hamburger, close } from "../assets/icons";
import { navLinks, socialMedia } from "../constants";

function SideNavbar({ showMenu, toggleMenu }) {
	return (
		<>
			<div
				className={`h-screen w-full backdrop-blur-sm absolute inset-0 z-[3] transition-all duration-500 ${
					showMenu ? "block" : "hidden"
				}`}
				onClick={toggleMenu}
			/>
			<div
				className={` lg:hidden  fixed inset-y-0 z-[4] w-[40%] max-sm:w-4/5 h-screen  bg-white p-8 shadow-lg overflow-y-scroll transition-all duration-500 ${
					showMenu ? "left-0" : "-left-full"
				}`}>
				<nav>
					<div className="flex justify-between items-center w-full">
						<a href="/">
							<img src={headerLogo} alt="logo" width={110} height={29} />
						</a>

						<div
							className="hidden max-lg:block cursor-pointer"
							onClick={toggleMenu}>
							{!showMenu ? (
								<img src={hamburger} alt="hamburger" width={25} height={25} />
							) : (
								<img src={close} alt="close" width={18} height={18} />
							)}
						</div>
					</div>
					<ul className="flex flex-col gap-8 w-full mt-8">
						{navLinks?.map((link) => (
							<li key={link?.label}>
								<a
									href={link?.href}
									onClick={toggleMenu}
									className="font-montserrat leading-normal text-lg text-slate-gray">
									{link?.label}
								</a>
							</li>
						))}
					</ul>

					<div className="flex items-center gap-5 mt-8">
						{socialMedia?.map((icon) => (
							<a
								href={icon?.link}
								key={icon?.alt}
								target="_blank"
								rel="noreferrer">
								<div className="flex justify-center items-center w-12 h-12 shadow-md rounded-full">
									<img
										src={icon?.src}
										alt={icon?.alt}
										width={24}
										height={24}
										className={`${
											icon?.alt === "facebook"
												? "facebook"
												: icon?.alt === "twitter"
												? "twitter"
												: "instagram"
										} transition-all duration-300`}
									/>
								</div>
							</a>
						))}
					</div>
				</nav>
			</div>
		</>
	);
}

function MenuButton({ showMenu, toggleMenu }) {
	return (
		<div className="hidden max-lg:block cursor-pointer" onClick={toggleMenu}>
			{!showMenu ? (
				<img src={hamburger} alt="hamburger" width={25} height={25} />
			) : (
				<img src={close} alt="close" width={20} height={20} />
			)}
		</div>
	);
}

function Navbar() {
	const [showMenu, setShowMenu] = useState(false);
	const toggleMenu = () => setShowMenu((prev) => !prev);

	useEffect(() => {
		const body = document.querySelector("body");
		if (showMenu) {
			body.style.overflow = "hidden";
		} else {
			body.style.overflow = "unset";
		}
	}, [showMenu]);

	return (
		<header className="padding-x py-8 absolute w-full z-[2]">
			{SideNavbar({ showMenu, toggleMenu })}
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
				{MenuButton({ showMenu, toggleMenu })}
			</nav>
		</header>
	);
}

export default Navbar;
