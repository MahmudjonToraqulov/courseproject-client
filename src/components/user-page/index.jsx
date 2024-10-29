import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";

import EditFilledFormsBlock from '../edit-filled-forms-block/index.jsx';
import EditFormsBlock from '../edit-forms-block/index.jsx';
import { getFormsByUserId } from '../../store/slices/form.slice.js';
import { getFilledFormsByUserId } from '../../store/slices/filledForm.slice.js';
import { useTranslation } from 'react-i18next';

const UserPage = () => {

    const {t} = useTranslation()
    const dispatch = useDispatch()

    const userId = useSelector(state => state.auth.user.id)

    const handleGetFormsByUserId = ()=>{
        dispatch(getFormsByUserId(userId))
    }
    const handleGetFilledFormsByUserId = ()=>{
        dispatch(getFilledFormsByUserId(userId))
    }

    useEffect(() => {
        handleGetFormsByUserId()
        handleGetFilledFormsByUserId()
    }, []);

    const [chosenTab, setChosenTab] = useState('forms')

    const handleChooseForms = ()=>{
        setChosenTab('forms')
    }

    const handleChooseFilled = ()=>{
        setChosenTab('filled')
    }

    return (
        <div className='pt-90 p-4'>
            <div className='mt-4'>
                <button
                    onClick={handleChooseForms}
                    className={'btn ' + (chosenTab === "forms" ? "btn-main" : "")}>{t('forms')}
                </button>
                <button
                    onClick={handleChooseFilled}
                    className={'btn ' + (chosenTab === "filled" ? "btn-main" : "")}>{t('filledForms')}
                </button>
            </div>
            {
                chosenTab === 'forms' ?
                    <EditFormsBlock handleGetFormsByUserId={handleGetFormsByUserId}/>
                    :
                    <EditFilledFormsBlock handleGetFilledForms={handleGetFilledFormsByUserId}/>
            }
        </div>
    );
};

export default UserPage;