import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteSurvey } from "../../redux/slice/surveySlice";

function SurveyData() {
    const surveyState = useSelector((state) => state.survey);
    const dispatch = useDispatch();
    return (
        <div className='col-start-1 col-end-3 border-2 rounded-lg p-10'>
            <table className='table-auto w-full border'>
                <caption className='text-4xl font-bold mb-4 text-pink-600'>
                    Data Survey Perokok
                </caption>
                <thead>
                    <tr className='font-semibold'>
                        <th className='border-2' rowSpan='2'>
                            No
                        </th>
                        <th className='border-2' rowSpan='2'>
                            Nama
                        </th>
                        <th className='border-2' rowSpan='2'>
                            Umur
                        </th>
                        <th className='border-2' rowSpan='2'>
                            Jenis Kelamin
                        </th>
                        <th className='border-2' colSpan='2'>
                            Apakah anda seorang perokok?
                        </th>
                        <th className='border-2' colSpan='4'>
                            Brand rokok yang digunakan
                        </th>
                        <th className='border-2' rowSpan='2'>
                            Delete
                        </th>
                    </tr>
                    <tr className='font-semibold'>
                        <th className='border-2'>Ya</th>
                        <th className='border-2'>Tidak</th>
                        <th className='border-2'>Sampoerna</th>
                        <th className='border-2'>Magnum</th>
                        <th className='border-2'>Esse</th>
                        <th className='border-2'>Marlboro</th>
                    </tr>
                </thead>
                <tbody className='overflow-y-scroll'>
                    {surveyState.survey.map((value) => {
                        return (
                            <tr key={value.id}>
                                <td className='border text-center'>{value.id}</td>
                                <td className='border text-center'>{value.name}</td>
                                <td className='border text-center'>{value.age}</td>
                                <td className='border text-center'>
                                    {value.gender.perempuan ? "Perempuan" : "Laki-laki"}
                                </td>
                                <td className='border text-center'>
                                    {value.isSmoker === "ya" ? "✅" : "-"}
                                </td>
                                <td className='border text-center'>
                                    {value.isSmoker === "tidak" ? "✅" : "-"}
                                </td>
                                <td className='border text-center'>
                                    {value.brand.sampoerna ? "✅" : "-"}
                                </td>
                                <td className='border text-center'>
                                    {value.brand.magnum ? "✅" : "-"}
                                </td>
                                <td className='border text-center'>
                                    {value.brand.esse ? "✅" : "-"}
                                </td>
                                <td className='border text-center'>
                                    {value.brand.marlboro ? "✅" : "-"}
                                </td>
                                <td className='border text-center'>
                                    <button
                                        className='cursor-pointer'
                                        onClick={() => dispatch(deleteSurvey(value.id))}
                                    >
                                        <img src='/icons/trash.svg' className='w-6 h-6 '/>
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default SurveyData