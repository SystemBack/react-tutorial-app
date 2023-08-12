import { useForm } from "react-hook-form";

const SignupForm = () => {
    const { register, handleSubmit, reset, formState: {errors} } = useForm();
    const handleSubmitForm = (data) => {
    }
    const handleClearForm = () => {
        reset();
    }

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <label htmlFor="name">
                Name
                <input {...register("name", {required:true})} />
            </label>
            <br />
            <label htmlFor="age">
                Age
                <input {...register("age", {required:true})} />
            </label>
            <br />
            <label htmlFor="address">
                Address
                <input {...register("address", {required:true})} />
            </label>
            <br />
            <label htmlFor="zipcode">
                Zipcode
                <input {...register("zipcode", {required:true})} />
            </label>
            <br />
            <label htmlFor="phone">
                Phone
                <input {...register("phone", {required:true})} />
            </label>
            <div>
                <button type="button" onClick={handleClearForm}>Clear Form</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default SignupForm