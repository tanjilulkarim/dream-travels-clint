import React from 'react';
import './AddService.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://frightening-mansion-03875.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('your data successfully insert');
                    reset();
                }
            })
    }
    return (
        <div>

            <div className="add-service">
                <h1>Add New travel place</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder="Name" />

                    <input {...register("short")} placeholder="Sort-tittle" />

                    <textarea {...register("description")} placeholder="Description" />

                    <input {...register("duration")} placeholder="Duration" />

                    <input type="number" {...register("price")} placeholder="$Price" />

                    <input {...register("image")} placeholder="img-url" />

                    <input type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddService;