const updateHealthData = async (petId, data) => {
    const currentTime = getCurrentTime();
    const last_interaction_time = data.last_interaction || currentTime;



    const updatedPet = await Pet.findByIdAndUpdate(
        petId,
        { $set: newData },
    );
    return updatedPet;
};


getTimeDifference = (time1, time2) => {
    // Calculate the difference in milliseconds
    const differenceInMilliseconds = Math.abs(time1.getTime() - time2.getTime());
    // Convert milliseconds to seconds
    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
    return differenceInSeconds;
  };

  
module.exports = { updateHealthData };