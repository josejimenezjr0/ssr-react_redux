import React from 'react'

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true
  return (
    <div className="flex justify-center mt-8 text-6xl">
    Oops! Page not found!
    </div>
  )
}

export default {
  component: NotFoundPage
  }