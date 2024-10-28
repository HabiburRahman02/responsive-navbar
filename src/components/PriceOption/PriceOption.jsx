import { FaCircleCheck } from "react-icons/fa6";
const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="space-y-3 bg-pink-600 p-5 text-white hover:bg-pink-700 flex flex-col">
            <h3 className="text-3xl font-bold">
                <span>{price} /mon</span>
            </h3>
            <h2 className="text-4xl font-semibold">{name}</h2>
            <div className="flex-grow">
                {
                    features.map((feature, i) => <div key={i} className="">
                        <p className="flex items-center gap-1 mt-4"><FaCircleCheck></FaCircleCheck> {feature}</p>
                    </div>)
                }
            </div>
            <button className="btn w-full bg-blue-500 text-white hover:bg-blue-600 border-none">Add TO Cart</button>
        </div>
    );
};

export default PriceOption;