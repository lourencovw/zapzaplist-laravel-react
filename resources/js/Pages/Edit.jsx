import React from 'react';
import { Link, Head, useForm } from '@inertiajs/inertia-react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import Textarea from '@/Components/Textarea';
import PrimaryButton from '@/Components/PrimaryButton';
import copy from "copy-to-clipboard"; 

export default function Edit(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: props.title,
        text: props.text,
        _method: 'PUT'
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('update.zap-list', props.link));
    };

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const copyLink = () => {
        copy(props.url);
        alert(`Url copiada`);
    }

    return (
        <>
            <Head title="Edit" />
            <div className="h-full relative flex flex-col justify-start sm:justify-center sm:pt-0 p-2 items-center">
                <PrimaryButton className="mt-2" onClick={copyLink}>
                    Copiar link
                </PrimaryButton>

                <div className="flex flex-col max-w-6xl mx-auto max-sm:px-6 max-sm:pt-6  lg:px-8">
                    <form onSubmit={submit} className="flex flex-col">
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
