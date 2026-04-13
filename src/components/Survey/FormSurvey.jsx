import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addSurvey } from "../../redux/slice/surveySlice.js";

function FormSurvey() {
    const surveyState = useSelector((state) => state.survey);
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        id: surveyState.nextId,
        name: "",
        age: 0,
        gender: "",
        isSmoker: "",
        brand: {
            sampoerna: false,
            magnum: false,
            esse: false,
            marlboro: false,
        },
    });

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(addSurvey(form));

        console.log(form);

        setForm({
            id: surveyState.nextId,
            name: "",
            age: 0,
            gender: {
                perempuan: false,
                "laki-laki": false,
            },
            isSmoker: "",
            brand: {
                sampoerna: false,
                magnum: false,
                esse: false,
                marlboro: false,
            },
        });
    };

    const onChangeHandler = (e) => {
        setForm((form) => {
            return {
                ...form,
                [e.target.type === "checkbox" ? "brand" : e.target.name]:
                    e.target.type === "radio"
                        ? { gender: {[e.target.id]: e.target.checked } }
                        : e.target.type === "checkbox"
                            ? Object.assign(form.brand, { [e.target.name]: e.target.checked })
                            : e.target.value,
            };
        });
    };
    return (
        <form
            className='flex flex-col justify-center gap-5 px-5 py-5 col-span-1 border-2 rounded-lg'
            onSubmit={submitHandler}
        >
            <header className='text-4xl font-bold mb-10 text-center text-pink-600'>
                Survey Perokok
            </header>
            <input
                value={form.name}
                onChange={onChangeHandler}
                type='text'
                placeholder='Masukkan Nama'
                className='border-2 outline-0 rounded-md p-2'
                name='name'
            />
            <input
                value={form.age}
                onChange={onChangeHandler}
                type='number'
                placeholder='Masukkan Umur'
                className='border-2 outline-0 rounded-md p-2'
                name='age'
            />
            <div>
                <label htmlFor='gender'>Jenis Kelamin</label>
                <div>
                    <input
                        className='mr-2'
                        defaultChecked={form.gender["laki-laki"]}
                        type='radio'
                        name='gender'
                        id='laki-laki'
                        value="Laki-laki"
                        onChange={onChangeHandler}
                    />
                    <label htmlFor='laki-laki'>Laki-laki</label>
                </div>
                <div>
                    <input
                        className='mr-2'
                        defaultChecked={form.gender.perempuan}
                        type='radio'
                        name='gender'
                        id='perempuan'
                        value="Perempuan"
                        onChange={onChangeHandler}
                    />
                    <label htmlFor='perempuan'>Perempuan</label>
                </div>
            </div>
            <div className='flex flex-col'>
                <label htmlFor='isSmoker'>Apakah anda seorang perokok?</label>
                <select
                    name='isSmoker'
                    id='isSmoker'
                    value={form.isSmoker}
                    onChange={onChangeHandler}
                    className='border-2'
                >
                    <option value='' disabled>Pilih</option>
                    <option value='ya'>Perokok</option>
                    <option value='tidak'>Bukan Perokok</option>
                </select>
            </div>
            {form.isSmoker === "ya" ? (
                <div>
                    <label htmlFor='brandCigarette'>Brand rokok yang digunakan</label>
                    <div>
                        <input
                            className='mr-2'
                            defaultChecked={form.brand.sampoerna}
                            type='checkbox'
                            name='sampoerna'
                            id='sampoerna'
                            onChange={onChangeHandler}
                        />
                        <label htmlFor='sampoerna'>Sampoerna</label>
                    </div>
                    <div>
                        <input
                            className='mr-2'
                            defaultChecked={form.brand.magnum}
                            type='checkbox'
                            name='magnum'
                            id='magnum'
                            onChange={onChangeHandler}
                        />
                        <label htmlFor='magnum'>Magnum</label>
                    </div>
                    <div>
                        <input
                            className='mr-2'
                            defaultChecked={form.brand.esse}
                            type='checkbox'
                            name='esse'
                            id='esse'
                            onChange={onChangeHandler}
                        />
                        <label htmlFor='esse'>Esse</label>
                    </div>
                    <div>
                        <input
                            className='mr-2'
                            defaultChecked={form.brand.marlboro}
                            type='checkbox'
                            name='marlboro'
                            id='marlboro'
                            onChange={onChangeHandler}
                        />
                        <label htmlFor='marlboro'>Marlboro</label>
                    </div>
                </div>
            ) : (
                ""
            )}
            <button className='border-2 rounded-md py-2 cursor-pointer font-bold font-xl text-white bg-pink-600 hover:bg-pink-800  '>Submit</button>
        </form>
    )
}

export default FormSurvey