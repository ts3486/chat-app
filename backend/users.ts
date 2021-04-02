const users: any = [];

const addUser = ({id, name, room}: any) => {

    name.trim().toLowerCase();
    room.trim().toLowerCase();

    const existingUser = users.find((user: any) => user.name === name && user.room === room)

    if(existingUser){
        return {error: "Username is taken"}
    }

    const user = {id, name, room};

    users.push(user);

    //user brackets for things you want to be read 
    return {user};

};

const removeUser = (id: any) => {

    const index = users.find( (id:string) => users.id === id);

    if(index != -1){
        return users.splice(index, 1)[0];
    }
    
};

const getUser = (id: any) => users.find((user: any) => user.id === id);


const getUsersInRoom = (room: string) => users.filter((user: any) => user.room === room);

export{}


module.exports = {addUser, removeUser, getUser, getUsersInRoom};
