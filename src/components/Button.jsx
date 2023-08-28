function Button(props) {
	const { label, iconUrl, link, btn2, fullWidth, type } = props;
	return !type ? (
		<a href={link}>
			<button
				className={`flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
				${
					btn2
						? "bg-white border-slate-gray text-slate-gray"
						: "bg-coral-red  text-white border-coral-red"
				}
				${fullWidth && "w-full"}
			`}>
				{label}
				{iconUrl && (
					<img
						src={iconUrl}
						alt="arrowRightIcon"
						className="ml-2 rounded-full w-5 h-5"
					/>
				)}
			</button>
		</a>
	) : (
		<button
			type={type}
			className={`flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full bg-coral-red  text-white border-coral-red
			${fullWidth && "w-full"}
		`}>
			{label}
			{iconUrl && (
				<img
					src={iconUrl}
					alt="arrowRightIcon"
					className="ml-2 rounded-full w-5 h-5"
				/>
			)}
		</button>
	);
}

export default Button;
