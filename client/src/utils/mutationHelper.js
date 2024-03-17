import { useQuery } from '@apollo/client';
import { USER_QUERY } from '../utils/queries'
import { useMutation } from '@apollo/client';
import { MUTATION } from '../utils/mutations';

function updatePet (petId, time, fun, sleep, hunger, clenliness) {
    const [updatePet] = useMutation(UPDATE_PET_MUTATION);


    const handleUpdatePet = async () => {
        try {
          const { data } = await updatePet({
            variables: {
              petId: petId,
              last_interaction: time,
              health: {
                fun: fun,
                sleep: sleep,
                hunger: hunger,
                cleanliness: cleanliness
              }
            }
          });
          console.log('Updated pet:', data.updatePet);
        } catch (error) {
          console.error('Failed to update pet:', error);
        }
    }
    handleUpdatePet();
}

function getPet (petId) {
    // call query
    const { loading, data } = useQuery(USER_QUERY, {
        variables: { id: decoded.data._id}
    });
    // get the data from here
    // specificly the time, and health data probably pet id to

    // return the data
}

// export functions