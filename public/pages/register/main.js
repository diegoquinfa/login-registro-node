document.querySelector('#register-form')
  .addEventListener("submit", async (e) => {
    e.preventDefault()

    const user = e.target.children.user.value
    const email = e.target.children.email.value
    const password = e.target.children.password.value

    const res = await fetch("/api/v1/register", {
      method: "POST",
      headers: {
        'Content-type': "application/json",
      },
      body: JSON.stringify({
        user,
        email,
        password
      })
    })

    if (!res.ok) return;

    const data = await res.json();
    console.log(data.status.email)
  })