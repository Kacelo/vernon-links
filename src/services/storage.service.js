/**
 * @description stores data to the device local storage
 * @param {string} key key identifier of the data
 * @param {any} value data to be stored
 */
export const _store = async (key, value) => {
  // Logger.log('STORING Key=>', key, "Value=> ", value);

  try {
    return localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log("Error", error);
  }
};

/**
 *
 * @param {string} key key of the value in AsyncStorage to be retrieved
 * @returns {*} Value matching the key given
 */
export const _retrieve = async (key) => {
  try {
    const value = localStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    } else {
      throw new Error("Not Found");
    }
  } catch (error) {
    console.log(`${key} not found!`);
    return undefined;
  }
};


/**
 * @description Removes an item matching key given
 * @param {string} key key identifier of item to be removed
 * @returns {Promise<Object>}
 */
 export const _remove = async (key) => {
    try {
        return localStorage.removeItem(key);
    } catch (error) {
        console.log('Error', error);
    }
};

/**
 * @description Erases all AsyncStorage for all clients, libraries.
 * @description you probably don't want to call this; use removeItem or multiRemove to clear only your app's keys
 */
 export const _flush = async () => {
    try {
        localStorage.clear();
    } catch (error) {
        console.log('Error', error);
        throw error;
    }
};
