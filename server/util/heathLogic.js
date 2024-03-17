const updateHealthData = async (data) => {
  const currentTime = Date.now();
  const lastInteractionTime = data.last_interaction || currentTime;

  const timeDifference = getTimeDifference(currentTime, lastInteractionTime);

  const barDrain = timeDifference / (24 * 60 * 60 * 2.1);

  data.health.fun -= barDrain;
  data.health.cleanliness -= barDrain;
  data.health.hunger -= barDrain;
  data.health.sleep -= barDrain;
  data.last_interaction = currentTime;

  // const updatedPet = await Pet.findByIdAndUpdate(petId, { $set: newData });
  // return updatedPet;

  return data;
};


const getTimeDifference = (time1, time2) => {
  // Calculate the difference in milliseconds
  const differenceInMilliseconds = Math.abs(time1 - time2);
  // Convert milliseconds to seconds
  const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);

  return differenceInSeconds;
};

module.exports = updateHealthData
