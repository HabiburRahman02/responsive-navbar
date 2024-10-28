import axios from "axios";
import { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter, PieChart, Pie } from 'recharts';


const Phones = ({ data }) => {
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

            {/* scatter chart */}
            <ResponsiveContainer width="100%" height={400}>
                <ScatterChart
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid />
                    <XAxis type="number" dataKey="price" name="Weight" unit="Kg" />
                    <YAxis type="number" dataKey="price" name="Price" unit="Tk" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter name="A school" data={phones} fill="#8884d8" />
                </ScatterChart>
            </ResponsiveContainer>

            {/* pie chart */}
            <ResponsiveContainer className={'my-12'} width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie data={phones} dataKey="price" cx="50%" cy="50%" outerRadius={170} fill="green" />
                    <Pie data={phones} dataKey="price" cx="50%" cy="50%" innerRadius={30} outerRadius={90} fill="yellow" label />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Phones;