

export let state = {
    profilePage : {
        profileData : [
            {
                text : 'Text 1',
                likesCount: 1
            },
            {
                text : 'Text 2',
                likesCount:2
            },
            {
                text : 'Text 3',
                likesCount:3
            }
        ],
        newPostText : 'it-kamasutra.com'
    },
    dialogPage : {
        messageData : [
            {
                message: 'Message 1'
            },
            {
                message: 'Message 2'
            },
            {
                message: 'Message 3'
            },
            {
                message: 'Message 4'
            }

        ],
        dialogData : [
            {
                id: 1,
                name: 'Dialog 1'
            },
            {
                id: 2,
                name: 'Dialog 2'
            },
            {
                id: 3,
                name: 'Dialog 3'
            },
            {
                id: 4,
                name: 'Dialog 4'
            }

        ],
        newMessageText : 'it-kamasutra.com'
    }
}


export let addPost = (text) => {

    let newPost = {
        text: text,
        likesCount: 1
    }
    state.profilePage.profileData.push(newPost);
    state.profilePage.newPostText='';
    rerenderEntireTree();
}

export let updatePost = (text) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree();
}

export let addMessage = (text) => {
    let newMessage = {
        message : text
    }
    state.dialogPage.messageData.push(newMessage)
    rerenderEntireTree();
}

export let updateMessage = (text) => {
    state.dialogPage.newMessageText = text
}

let rerenderEntireTree = () => {
    console.log('State was changed');
}

export let subsribe = (observer) => {
    rerenderEntireTree=observer
}