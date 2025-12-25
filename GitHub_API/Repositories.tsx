/* const { isLoading, isError, isSuccess } = useQuery({ queryKey: ['repositories'], queryFn:getRepositories })
• queryKey is a unique key for a query and it is used for caching and refetching data.
• queryFn is a function to fetch data, and it should return a promise.
*/
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

type Repository = {
  id: number
  full_name: string
  html_url: string
}

function Repositories() {
  const getRepositories = async (): Promise<Repository[]> => {
    const response = await axios.get(
      'https://api.github.com/search/repositories?q=react'
    )
    return response.data.items
  }

  const { isLoading, isError, data } = useQuery<Repository[]>({
    queryKey: ['repositories'],
    queryFn: getRepositories,
    staleTime: 60 * 1000, // 1 minute
  })

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error...</p>

  return (
    <table>
      <tbody>
        {data?.map(repo => (
          <tr key={repo.id}>
            <td>{repo.full_name}</td>
            <td>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                {repo.html_url}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Repositories
