import Button from "../components/Button";

function Subscribe() {
	return (
		<section
			className="max-container flex justify-between items-center max-lg:flex-col gap-10"
			id="contact-us">
			<h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin fot-bold">
				Sign up from
				<span className="text-coral-red"> Updates</span> & Newsletter
			</h3>

			<form className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
				<input
					type="email"
					placeholder="subscribe@nike.com"
					className="input"
					required
				/>
				<div className="flex max-sm:justify-end items-center max-sm:w-full">
					<Button label="Sign Up" fullWidth type="submit" />
				</div>
			</form>
		</section>
	);
}

export default Subscribe;
