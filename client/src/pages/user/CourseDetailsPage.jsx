import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";
import { useDispatch, useSelector } from "react-redux";

export const CourseDetailsPage = () => {
    const [courseDetails, setCourseDetails] = useState({});
    const { id } = useParams();

    const { courses } = useSelector((state) => state.course);

    const fetchCourseDetails = async () => {
        try {
            const response = await axiosInstance({
                url: `/course/details/${id}`,
                method: "GET",
            });
            setCourseDetails(response?.data?.data);
        } catch (error) {
            console.log(error);
        }
    };

    console.log("courseDetails====", courseDetails);

    // const fetchCourseDetails = () => {
    //     console.log("courses====", courses);
    //     const myCourse = courses.find((value) => {
    //         if(value._id.trim() == id.trim()) return value

    //     });

    //     console.log(id, "=====id");
    //     setCourseDetails(myCourse);
    // };

    useEffect(() => {
        fetchCourseDetails();
    }, []);

    return (
        <>
            <div className="flex w-full">
                <div className="w-4/12">
                    <img src={courseDetails?.image} alt="course-details" />
                </div>
                <div className="w-8/12">
                    <h1 className="font-bold text-4xl">{courseDetails?.title}</h1>
                </div>
            </div>
            <button className="btn btn-success">Add to cart </button>
        </>
    );
};
