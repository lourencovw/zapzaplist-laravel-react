import React, { useEffect } from 'react';
import { Link, Head, useForm } from '@inertiajs/inertia-react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import Textarea from '@/Components/Textarea';
import PrimaryButton from '@/Components/PrimaryButton';
import { Inertia } from '@inertiajs/inertia'

export default function Edit(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: props.title,
        text: props.text,
        _method: 'PUT'
    });

    console.log(props);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => console.log(response));
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('update.zap-list', props.link));
    };

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    return (
        <>
            <Head title="Edit" />
            <div className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0 p-2">


                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <form onSubmit={submit} className="flex flex-col ">
                        <div>
                            <InputLabel forInput="title" value="Título" />

                            <TextInput
                                type="text"
                                name="title"
                                value={data.title}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                handleChange={onHandleChange}
                                readOnly
                                disabled
                            />

                            <InputError message={errors.email} className="mt-2" />
                            <InputLabel forInput="text" value="Texto Inicial" />

                            <Textarea
                                type="text"
                                name="text"
                                value={data.text}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <PrimaryButton className="mt-2 self-end" processing={processing}>
                           Editar
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </>
    );
}
