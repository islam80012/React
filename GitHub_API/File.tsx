//when there are a lot of network calls, the use of third-party networking  libraries is recommended:
//  |-> React Query (Tanstack Query) (https://tanstack.com/query).
//  |-> SWR (https://swr.vercel.app/)
/* 
const { isLoading, isError, isSuccess } = useQuery({ queryKey: ['repositories'], queryFn:getRepositories })
• queryKey is a unique key for a query and it is used for caching and refetching data.
• queryFn is a function to fetch data, and it should return a promise.
*/

import { QueryClient, QueryClientProvider } from 
  '@tanstack/react-query';
import Repositories from './Repositories'

const queryClient = new QueryClient();

function File() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Repositories />        
      </QueryClientProvider>
    </>
  )
}
export default File;
