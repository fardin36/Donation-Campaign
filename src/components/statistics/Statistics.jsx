import { Chart } from "react-google-charts";
import { getStoredDonations } from "../../utility/localStorage";
import { useLoaderData } from "react-router-dom";



const Statistics = () => {

    const yourDonation = getStoredDonations().length;
    const totalDonation = useLoaderData().length;


    const data = [
        ["Task", "Hours per Day"],
        ["Your Donation", yourDonation],
        ["Total Donation", totalDonation]
    ];

    const options = {
        title: "My Daily Activities",
        pieStartAngle: 135,
        tooltip: { trigger: "none" },
        slices: {
            0: { color: "#00C49F" },
            1: { color: "#FF444A" },
        },
    };

    return (
        <div className="w-full text-center flex justify-center items-center">
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"80vh"}
            />
        </div>
    );
};

export default Statistics;