const errorMessage = document.querySelector('.error')

document.querySelector('#register-form')
  .addEventListener('submit', async (e) => {
    e.preventDefault()

    const user = e.target.children.user.value
    const email = e.target.children.email.value
    const password = e.target.children.password.value

    const res = await fetch('/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        user,
        email,
        password
      })
    })

    const data = await res.json()

    if (!res.ok) {
      errorMessage.classList.remove('oculto')
      errorMessage.textContent = data.message
      return
    }

    if (data.redirect) {
      window.location.href = data.redirect
    }
  })
