import Volunteer from "@/components/Volunteer/Volunteer";

const page = () => {
	return (
		<div className=" my-10 container mx-auto ">
			<h1 className=" text-3xl font-serif font-semibold text-blue-600 text-center">This is home Page!</h1>
			<Volunteer />
		</div>
	);
};

export default page;
