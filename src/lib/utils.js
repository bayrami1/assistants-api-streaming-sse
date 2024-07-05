export const SimpleId = () => {
    return Math.random().toString(36).slice(2)
}

const trivia_list = [
]

const getDailyTrivia = (args) => {
    const index = Math.round((trivia_list.length - 1) * Math.random())
    return { ...args, message: `Here's a cat trivia for you:\n\n${trivia_list[index]}`}
}

const generateCatName = ({ theme = 'a' }) => {

    const names = {
    }

    const index = Math.round((names[theme].length - 1) * Math.random())
    return { theme, name: `Here's a cat name for you:\n\n${names[theme][index]}`}
}

export const mockAPI = (name, args) => {


    switch(name) {
        default:
            return { status: 'error', message: 'tool not found' }
    }
}