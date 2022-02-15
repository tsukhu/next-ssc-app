export default async function fetchData(delay = 0) {
    const [res] = await Promise.all([
      fetch(`http://localhost:3004/notes`),
      new Promise(res => setTimeout(res, (Math.random()) * delay))
    ])
    if (res.status !== 200) {
      throw new Error(`Status ${res.status}`)
    }
    return res.json()
  }