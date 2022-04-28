import { v4 as uuidv4 } from 'uuid';


let usersData = []

export const getUser = (req, res) => {
    res.send(usersData)
}

export const createUser = (req, res) => {

    const postUser = req.body;
    const userId = uuidv4();

    const userWithId = { ...postUser, id: userId}
    
    usersData.push(userWithId)
    res.send(usersData);
}

export const getOneUser = (req, res) => {
    const { id } = req.params;

    const foundUser = usersData.find((user) => user.id === id)
    res.send(foundUser)
}

export const deleteUser = (req, res) => {
    const {id} = req.params;

    usersData = usersData.filter(user => user.id !== id)
    res.send(usersData)

    console.log(usersData)
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const {firstName, lastName, age} = req.body;

    const userToBeUpdated = usersData.find((user) => user.id === id);

    if(firstName){
        userToBeUpdated.firstName = firstName;
    }
    if(lastName){
        userToBeUpdated.lastName = lastName;
    }
    if(age){
        userToBeUpdated.age = age;
    }

    res.send("PATCH", usersData)
}