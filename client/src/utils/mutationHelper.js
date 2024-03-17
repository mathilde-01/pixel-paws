import { useMutation } from '@apollo/client';
import { UPDATE_PET_MUTATION } from '../utils/mutations';

export function updatePet() {
  const [updatePetMutation] = useMutation(UPDATE_PET_MUTATION);

  const updatedPet = async (petId, updateData) => {
    try {
      const { data } = await updatePetMutation({
        variables: {
          petId: petId,
          updateData: updateData
        }
      });

      // Extract and return the updated pet data
      const updatedPet = data.updatePet;
      return updatedPet;
    } catch (error) {
      // Handle errors if needed
      console.error('Failed to update pet:', error);
      throw new Error(`Failed to update pet: ${error.message}`);
    }
  };

  return { updatedPet };
}

// function getPet (petId) {
//     // call query
//     const { loading, data } = useQuery(USER_QUERY, {
//         variables: { id: decoded.data._id}
//     });
//     // get the data from here
//     // specificly the time, and health data probably pet id to

//     // return the data
// }

// // export functions