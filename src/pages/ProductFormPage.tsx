import { Formik, Form } from 'formik'
import { createProduct } from '../firebase/db'

const ProductFormPage = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        price: 0,
        description: '',
      }}
      onSubmit={async values => {
        try {
          console.log(values)
          const result = await createProduct({
            name: values.name,
            price: values.price,
            description: values.description,
          })
          console.log(result.id)
        } catch (error) {
          console.log(error)
        }
      }}>
      {({ handleChange }) => (
        <Form>
          <input
            type='text'
            name='name'
            onChange={handleChange}
            placeholder='Product name'
          />
          <input
            type='text'
            name='price'
            onChange={handleChange}
            placeholder='Product price'
          />
          <textarea
            name='description'
            rows={3}
            onChange={handleChange}
            placeholder='Product description'
          />
          <input type='file' name='image' />
          <button type='submit'>Save</button>
        </Form>
      )}
    </Formik>
  )
}

export default ProductFormPage
