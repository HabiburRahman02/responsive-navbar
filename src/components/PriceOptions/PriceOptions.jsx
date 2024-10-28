
import PriceOption from "../PriceOption/PriceOption";
import ReChart from "../ReChart/ReChart";

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
            price: 30,
            features: [
                "Access to all gym equipment",
                "10 personal training sessions",
                "Unlimited group fitness classes",
                "Access to sauna, steam room, and pool",
                "Free dietary consultation",
                "Locker room access with personal locker"
            ]
        },
        {
            id: 4,
            name: "Elite Membership",
            price: 89.99,
            features: [
                "24/7 gym access",
                "Unlimited personal training sessions",
                "VIP group fitness classes",
                "Access to sauna, steam room, pool, and spa",
                "Free dietary and wellness consultations",
                "Locker room access with personal locker and laundry service"
            ]
        },
        {
            id: 5,
            name: "Family Membership",
            price: 119.99,
            features: [
                "Access for 4 family members",
                "Access to all gym equipment",
                "Personal training sessions for each family member",
                "Family group fitness classes",
                "Access to sauna, steam room, and pool",
                "Locker room access with family locker"
            ]
        },
        {
            id: 6,
            name: "Corporate Membership",
            price: 199.99,
            features: [
                "Access for up to 10 employees",
                "Unlimited access to all gym facilities",
                "Corporate group fitness classes",
                "Personal training sessions for each member",
                "Access to all wellness and relaxation amenities",
                "Dedicated corporate locker room"
            ]
        }
    ];


    return (
        <div>
            <div className="grid lg:grid-cols-3 gap-6 my-12">
                {
                    gymData.map(priceOption => <PriceOption
                        key={priceOption.id}
                        option={priceOption}
                    ></PriceOption>)
                }
            </div>
            <ReChart data={gymData}></ReChart>
        </div>
    );
};

export default PriceOptions;