import React, {ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useState} from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

export const pureAddUser = (
    name: string,
    setError: Dispatch<SetStateAction<string>>,
    setName: Dispatch<SetStateAction<string>>,
    addUserCallback: (name: string) => void
) => {
    if (name === '') {
        setError('Mistake! Enter a name!');
    } else {
        addUserCallback(name);
        setName('');
    }
}

export const pureOnBlur = (name: string, setError: (name: string) => void) => {
    if (name === '') {
        setError('Mistake! Enter a name!');
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => {
    if (e.key === 'Enter') {
        addUser();
    }
}


const GreetingContainer: React.FC<GreetingContainerPropsType> = (
    {
        users,
        addUserCallback,
    }
) => {
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string>('');

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
        error && setError('');
    }

    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback);
        setName('');
    }

    const onBlur = () => {
        pureOnBlur(name, setError);
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser);
    }

    const totalUsers = users.length;
    const lastUserName = users.length ? users[users.length - 1].name : '';

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer;