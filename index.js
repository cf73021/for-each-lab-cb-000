var iterativeLog = (items) => {
  items.forEach((element, index, items) => {
    console.log(`${index}: ${element}`);
  });
};

ver iterate = (callback) => {
  new_array = ["thingOne", "thingTwo", "thingThree"];
  new_array.forEach(callback);
  return new_array
}
