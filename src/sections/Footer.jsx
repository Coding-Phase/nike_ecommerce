import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

function Footer() {
	return (
		<footer className="max-container">
			<div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
				<div className="flex flex-col items-start">
					<a href="/">
						<img src={footerLogo} alt="logo" width={150} height={46} />
					</a>
					<p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
						Get shoes ready for the new term at your nearest Nike store. Find
						Your perfect Size In Store. Get Rewards
					</p>
					<div className="flex items-center gap-5 mt-8">
						{socialMedia?.map((icon) => (
							<div
								key={icon?.alt}
								className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
								<img src={icon?.src} alt={icon?.alt} width={24} height={24} />
							</div>
						))}
					</div>
				</div>

				<div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap text-base font-montserrat text-white-400">
					{footerLinks?.map((section) => (
						<div key={section?.title}>
							<h5 className="text-2xl leading-normal font-medium mb-6">
								{section?.title}
							</h5>
							<ul className="">
								{section?.links?.map((link) => (
									<li
										key={link?.name}
										className="mt-3 leading-normal hover:text-slate-gray transition-colors">
										<a href={link?.link}>{link?.name}</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className="flex justify-between items-center text-base leading-7 font-palanquin  text-white-400 mt-24 max-sm:flex-col">
				<a href="/">&copy; 2023 Nike, Inc. All Rights Reserved</a>

				<a href="/">Terms & Conditions</a>
			</div>
		</footer>
	);
}

export default Footer;
