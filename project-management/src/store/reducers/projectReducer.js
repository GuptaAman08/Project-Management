
const initState = {
    projects: [
        {id: 1, title: 'My First book', content: 'lorem ipsum gypsum asda jkjie drewa'},
        {id: 2, title: 'Hanging window', content: 'lorem ipsum gypsum asda jkjie drewa'},
        {id: 3, title: 'Dirty mind', content: 'lorem ipsum gypsum asda jkjie drewa'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type){
        case 'ADD_PROJECT':
            console.log(action.project);
            return state
        case 'ADD_PROJECT_ERR':
            alert('Project Created!!')
            return state
        default:
            return state
    }
}

export default projectReducer;