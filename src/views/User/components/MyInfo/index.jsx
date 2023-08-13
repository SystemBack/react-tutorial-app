import { useForm } from 'react-hook-form'
import styles from './MyInfo.module.css'
import { useEffect } from 'react';
import { set } from 'date-fns';

const MyInfo = () => {
    const { handleSubmit, register, formState: {errors}, setValue } = useForm();
    const USER_DATA_KEY = 'userData'

    useEffect((  ) => {
        try {
            const userData = JSON.parse(localStorage.getItem(USER_DATA_KEY));

            setValue('name', userData?.name);
            setValue('email', userData?.email);
            setValue('age', userData?.age);
        } catch(errro) {
            console.log(error);
        }
    }, []);

    const handleFormSubmit = (data) => {
        try {
            localStorage.setItem(USER_DATA_KEY, JSON.stringify(data));
            alert("Information saved!")
        } catch (error) {
            alert("Something went wring :(")
        }
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.myInfoContainer}>
            <label htmlFor="name">
                Name
                <input {...register("name", {required:true, minLength:1, maxLength:120 })} />
            </label>
            <label htmlFor="name">
                Email
                <input {...register("email", {required:true, minLength:1, maxLength:120 })} />
            </label>
            <label htmlFor="name">
                Age
                <input {...register("age", {required:true, min:1, max:120, valueAsNumber:true})} type='number' />
            </label>
            <div>
                <button>Save</button>
            </div>
        </form>
    );
};

export default MyInfo;