import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const gymData = [
        {
            id: 1,
            name: "Basic Membership",
            price: 29.99,
            features: [
                "Access to all gym equipment",
                "1 personal training session",
                "Free group fitness classes",
                "Locker room access"
            ]
        },
        {
            id: 2,
            name: "Standard Membership",
            price: 49.99,
            features: [
                "Access to all gym equipment",
                "5 personal training sessions",
                "Unlimited group fitness classes",
                "Access to sauna and steam room",
                "Locker room access"
            ]
        },
        {
            id: 3,
            name: "Premium Membership",
            price: 69.99,
            features: [
                "Access to all gym equipment",
                "10 personal training sessions",
                "Unlimited group fitness classes",
                "Access to sauna, steam room, and pool",
                "Free dietary consultation",
                "Locker room access with personal locker"
            ]
        }
    ];


    return (
        <div className="grid lg:grid-cols-3 gap-6 my-12">
            {
                gymData.map(priceOption => <PriceOption
                    key={priceOption.id}
                    option={priceOption}
                ></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;