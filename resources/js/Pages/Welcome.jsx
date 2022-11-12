import React from 'react';
import { Link, Head, useForm } from '@inertiajs/inertia-react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import Textarea from '@/Components/Textarea';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Welcome(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        text: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('store.zap-list'));
    };

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
                {/* <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link href={route('dashboard')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div> */}

                <div className="flex flex-col max-w-6xl mx-auto max-sm:px-6 max-sm:pt-6  lg:px-8">
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
                                readOnly={false}
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

                        <PrimaryButton className="mt-4 self-end" processing={processing}>
                            Adicionar lista
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </>
    );
}
