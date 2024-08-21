import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { axiosInstance } from "../../config/axiosInstance";
import { CourseCard } from "../../componets/ui/Cards";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseList } from "../../redux/features/courseSlice";
import { Course } from "../../../../server/models/courseModel";

export const CoursePage = () => {
    const dispatch = useDispatch();
    const { courses } = useSelector((state) => state.course);
    const [searchVal, setSearchValue] = useState("");



    const serchCourses = async () => {
        const response = await axiosInstance({
            params: searchVal,
            url: "",
            method: "GET",
        });
    };

    useEffect(()=>{
        setTimeout(() => {
            serchCourses()
        }, 500);


    })

    // const {searchValue} =req.params
    // Course.find({ title: { $regex: searchValue, $options: "i" } })



    const fetchCourses = async () => {
        try {
            const response = await axiosInstance({
                url: "/course/courseList",
                method: "GET",
            });

            dispatch(fetchCourseList(response?.data?.data));
            // setCourses(response?.data?.data);
        } catch (error) {
            console.log(error);
            toast.error("failed fetching products");
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <div className="px-20  py-10">
            <h1 className="font-bold text-4xl my-5">List of courses</h1>
            <div className="grid grid-cols-3 gap-10">
                {courses.map((value) => (
                    <CourseCard key={value._id} course={value} />
                ))}
            </div>
        </div>
    );
};
