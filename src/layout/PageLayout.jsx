import { Navbar, Footer } from "../sections";

function PageLayout({ Children }) {
	return (
		<>
			<Navbar />
			{Children}
			<section className="padding-x padding-t pb-8 bg-black">
				<Footer />
			</section>
		</>
	);
}

export default PageLayout;
