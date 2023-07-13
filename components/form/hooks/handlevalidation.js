export default function handleValidation(schema, formData) {
    let validationErrors = {}
    return new Promise((resolve, reject) => {
        schema.validate(formData, { abortEarly: false }).then(res => {
            if (res) {
                resolve(res)
            }
        }).catch(err => {
            // console.log(err)
            if (err.name === 'ValidationError') {
                err.inner.map((e) => {
                    validationErrors = {
                        [e.path]: e.errors,
                        ...validationErrors
                    }
                });
                reject(validationErrors)
            }
        })
    })
}