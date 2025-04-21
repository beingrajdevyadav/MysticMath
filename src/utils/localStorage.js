// To Save Data to Local Storage
export const saveToLocalStorage = (key, value)=>{
    localStorage.setItem(key, JSON.stringify(value));
};


// To Get Data from Local Storage
export const getFromLocalStorage = (key)=>{
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}