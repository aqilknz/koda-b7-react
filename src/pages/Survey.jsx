import React from 'react'
import Header from '../components/minitask4/Header.jsx'
import FormSurvey from '../components/Survey/FormSurvey.jsx'
import SurveyData from '../components/Survey/SurveyData.jsx'

function Survey() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className='min-w-full flex gap-2 my-2'>
                <div className='flex-1'>
                    <FormSurvey />
                </div>
                <div className='flex-2'>
                    <SurveyData />
                </div>
            </main>
        </div>
    )
}

export default Survey