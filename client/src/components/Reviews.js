// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import moment from 'moment'
// import { UserContext } from '../UserContext'


// const Reviews = () => {
//   const [reviews, setReviewData] = useState([])

//   const [filterReviews, setFilterReviews] = useState([])



//   useEffect(() => {
//     axios.get('/api/reviews')
//       .then(review => {
//         console.log(review)
//         setReviewData(review.data)
//         setFilterReviews(review.data)
//         console.log(reviews)
//       })
//   }, [])


//   function handleSort(event) {
//     console.log(filterReviews)
//     console.log(event.target.value)
//     const data = filterReviews.slice()
//     if (event.target.value === 'oldest') {
//       const old = data.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt))
//       setFilterReviews(old)
//     } if (event.target.value === 'most-recent') {
//       const recent = data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
//       setFilterReviews(recent)
//     } if (event.target.value === 'lowToHigh') {
//       const low = data.sort((a, b) => a.rating - b.rating)
//       setFilterReviews(low)

//     } if (event.target.value === 'highToLow') {
//       const high = data.sort((a, b) => b.rating - a.rating)
//       setFilterReviews(high)
//     }
//   }



// }

// export default Reviews