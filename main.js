// Sign up form submission handler
document.querySelector('.sign-up form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const userData = {
    name: formData.get('Name'),
    email: formData.get('Email'),
    password: formData.get('Password'),
  };

  fetch('https://abha.abdm.gov.in/abha/v3', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(userData),
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
});

// Sign in form submission handler
document.querySelector('.sign-in form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const userData = {
    username: formData.get('Mobile, Aadhar or ABHA number'),
    password: formData.get('Password'),
  };

  fetch('https://abha.abdm.gov.in/abha/v3', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY', // replace with your actual API key or authentication token
    },
    body: JSON.stringify(userData),
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
});