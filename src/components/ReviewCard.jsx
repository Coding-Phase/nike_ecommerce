import { star } from "../assets/icons";

function ReviewCard({ imgURL, customerName, rating, feedback }) {
	return (
		<div className="flex justify-center items-center flex-col">
			<img
				src={imgURL}
				alt="customer"
				className="rounded-full object-cover w-[110px] h-[110px]"
			/>
			<p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
			<div className="mt-3 flex justify-center items-center gap-2.5">
				<img
					src={star}
					alt="star"
					width={20}
					height={20}
					className="object-contain m-0"
				/>
				<p className="text-xl font-montserrat text-slate-gray">({rating})</p>
			</div>
			<h4 className="mt-1 font-palanquin text-3xl text-center font-bold">
				{customerName}
			</h4>
		</div>
	);
}

export default ReviewCard;
