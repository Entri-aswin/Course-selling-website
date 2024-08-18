import toast from "react-hot-toast";
import { axiosInstance } from "../config/axiosInstance";

export const InstructorLogin = async(data)=>{

    try {
        const response = await axiosInstance({
            url: "/instructor/login",
            method: "POST",
            data,
        });
        return response?.data;
    } catch (error) {
        toast.error("Log-in Success");
        console.log(error);
    }
}