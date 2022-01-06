import React from 'react'
import { Helmet } from 'react-helmet'
import ApiFetching from '../components/ApiFetching'
import CustomTitle from '../components/CustomTitle'

const Contact = () => {
    return (
        <>
          <CustomTitle title="Contact" />
            Contact
            <ApiFetching />
        </>
    )
}

export default Contact
