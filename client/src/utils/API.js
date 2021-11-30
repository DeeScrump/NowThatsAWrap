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

  export const getOnline = () => {
    return fetch('/online', {
      headers: {
        'Content-Type': 'application/json',
        
      },
    });
  };
  export const getVip = () => {
    return fetch('/vip', {
      headers: {
        'Content-Type': 'application/json',
        
      },
    });
  };
  export const postVip = () => {
    return fetch('/vip', {
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
    return fetch('/menu/:id/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    });
  };
  export const updateReview = (reviews) => {
    return fetch('/menu/:id/reviews', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    });
  };
  export const deleteReview = (reviews) => {
    return fetch(`/menu/:id/reviews`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        //authorization: `Bearer ${token}`,
      },
    });
  };