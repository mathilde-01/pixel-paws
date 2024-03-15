import { Outlet } from 'react-router-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
  } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/style.css'



function App() {
    // The Outlet component will conditionally swap between the different pages according to the URL

    const httpLink = createHttpLink({
        uri: '/graphql',
      });
      
      // Construct request middleware that will attach the JWT token to every request as an `authorization` header
      const authLink = setContext((_, { headers }) => {
        // get the authentication token from local storage if it exists
        const token = localStorage.getItem('id_token');
        // console.log(token);
        // return the headers to the context so httpLink can read them
        return {
          headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
          },
        };
      });
      
      const client = new ApolloClient({
        // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
      });

    return (
        <ApolloProvider client={client}>
       
            <main id="main">
                <Navbar/>
                <Outlet />
            </main>
            <Footer/>
        </ApolloProvider>
    );
  }
  
  export default App;