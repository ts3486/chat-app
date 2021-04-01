export{}

const users: any = [];

const addUser = ({id, name, room}) => {

    name.trim().toLowerCase();
    room.trim().toLowerCase();

    const existingUser = users.find(user => user.name === name && user.room === room)

    if(existingUser){
        return {error: "Username is taken"}
    }

    const user = {id, name, room};

    users.push(user);

    //user brackets for things you want to be read 
    return {user};

};

const removeUser = (id: any) => {

    const index = users.find( id => users.id === id);

    if(index != -1){
        return users.splice(index, 1)[0];
    }
    
};

const getUser = (id: any) => users.find((user: any) => user.id === id);


const getUsersInRoom = (room) => users.filter((user) => user.room === room);


module.exports = {addUser, removeUser, getUser, getUsersInRoom};
