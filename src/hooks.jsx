export const FnHooks = () => {
  
	const [name, setName] = React.useState('')

  React.useEffect(() => {
        
	  const request = {
      method: 'GET',
      credentials: 'include',
      headers: {}
    }

    fetch('http://localhost:5000/login', request)
        .then(response => response.json())
        .then(content => setName(content.username))
        .catch(err => console.error(err))
		}, [])

    return <h1>Hello {name}</h1>
}