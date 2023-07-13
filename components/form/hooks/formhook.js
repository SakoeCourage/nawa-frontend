'use client'
import { useState } from 'react';
import handleValidation from './handlevalidation';
import { object, string, number, date } from 'yup';
import Api from '@/api/api';

const Formhook = (initialValues, schema) => {
  const [data, setData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);

  const handleChange = (key, value) => {
    setData((prevData) => ({ ...prevData, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = handleValidation(object(schema), data);
    if (Object.keys(validationErrors).length === 0) {
      setProcessing(true);
      try {
        // Simulate an async form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log('Form submitted:', data);
        setData(initialValues);
        setErrors({});
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setProcessing(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const post = async (url,options={}) => {
    const { onSuccess = () => {} } = options;
    setProcessing(true)
    setErrors({});
    handleValidation(object(schema), data).then(res => {
      Api.post(url, data).then(res => {
        if (res) {
          setProcessing(false)
          console.log('done')
          onSuccess(res); 
        }
      }).catch(err => {
        if (err) {
           setErrors(err)
           setProcessing(false) 
          }
      })
    }).catch(err => {
      setErrors(err)
      setProcessing(false)
    })

  }
  const put = async (url,{onSuccess = void(0)}) => {
    setProcessing(true)
    handleValidation(object(schema), data).then(res => {
      Api.put(url, data).then(res => {
        if (res) {
          setProcessing(false)
          onSuccess(res)
        }
      }).catch(err => {
        if (err) {
           setErrors(err)
           setProcessing(false) 
          }
      })
    }).catch(err => {
      setErrors(err)
      setProcessing(false)
    })

  }

  const patch = async (url,{onSuccess = void(0)}) => {
    setProcessing(true)
    handleValidation().then(res => {
      Api.patch(url, data).then(res => {
        if (res) {
          setProcessing(false)
          onSuccess(res)
        }
      }).catch(err => {
        if (err) {
           setErrors(err)
           setProcessing(false) 
          }
      })
    }).catch(err => {
      setErrors(err)
      setProcessing(false)
    })

  }


  return {
    data,
    errors,
    processing,
    handleChange,
    handleSubmit,
    put,
    patch,
    post
  };
};

export default Formhook;
