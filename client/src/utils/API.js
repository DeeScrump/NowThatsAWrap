//import axios from 'axios';

//const url = "http://localhost:3001";

// export const fetchMenu = () => {
//   return fetch('/api/menu', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
      
//     },
//   })
// };

export const getHome = () => {
    return fetch('/', {
        method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        
      },
    });
  };

  export const getAbout = () => {
    return fetch('/about', {
        method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        
      },
    });
  };

  export const getEvent = () => {
    return fetch('/event', {
        method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        
      },
    });
  };
  export const getContact = () => {
    return fetch('/contact', {
        method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        
      },
    });
  };
  export const getCatering = () => {
    return fetch('/catering', {
      headers: {
        'Content-Type': 'application/json',
        
      },
    });
  };

// route to get menu

export const getMenu = () => {
    return fetch('/menu', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
          },
    });
};

export const getSingleMenu = (menu) => {
    return fetch('/menu/:id', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
          },
    });
};
export const getReview = (reviews) => {
    return fetch('/menu/:id/reviews', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
          },
    });
};
export const createReview = (reviews) => {
    return fetch('/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    });
  };
  export const deleteReview = (review_Id) => {
    return fetch(`/menu/:id/reviews/${review_Id}`, {
      method: 'DELETE',
      headers: {
        //authorization: `Bearer ${token}`,
      },
    });
  };