import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../Redux/Slices/CourseSlice";

import HomeLoayout from "../../Layouts/HomeLayout";
import CourseCard from "../../Components/CourseCard";

function CourseList() {
    const dispatch = useDispatch();

    const {courseData} = useSelector((state) => state.course);

    const loadCourse = async() => {
        await dispatch(getAllCourses());
    }
    useEffect(() => {
        console.log("hello from course list");
        loadCourse();
    },[]);

    /**
     * RENDER LOGIC GOES HERE 
     */

    return (
        <HomeLoayout>
            <div className="min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white ">
               <h1 className="text-center text-3xl font-semibold mb-5">
                    Explore the courses made by 
                    <span className="font-bold text-yellow-500">
                         Industry experts
                    </span>
                </h1> 
                    <div className=" mb-10 flex flex-wrap gap-14">
                        {
                            courseData.map((course) => (
                                <CourseCard key={course._id} data={course} />
                            ))
                        }
                    </div>
                

            </div>
        </HomeLoayout>
    )
}

export default CourseList;