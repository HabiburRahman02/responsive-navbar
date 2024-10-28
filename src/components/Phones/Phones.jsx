import axios from "axios";
import { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(info => {
                const phonesData = info.data.data;
                const phonesFakeData = phonesData.map(phone => {
                    const myPhones = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return myPhones
                })
                setPhones(phonesFakeData);
            })
    }, [])

    return (
        <div className="w-full h-96">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={1200}
                    height={400}
                    data={phones}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Phones;