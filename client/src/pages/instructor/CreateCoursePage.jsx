import React, { useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";

export const CreateCoursePage = () => {
    const [data, setData] = useState({ title: "", desc: "", duration: "", image: "" });

    const handleSubmit = async () => {
        const response = await axiosInstance({
            url: "/course/create",
            method: "POST",
            data,
        });
    };

    const handleChange = () => {};

    return (
        <div>
            <form>
                <input placeholder="Enter Title" required type="text" name="title" id="" />
                <br />
                <input placeholder="Enter Description" type="text" name="desc" id="" />
                <br />
                <input placeholder="Add image" type="file" name="image" id="" />
                <br />
                <input placeholder="Enter Duration" type="text" name="duration" id="" />

                <button type="submit">Create course </button>
            </form>
        </div>
    );
};
