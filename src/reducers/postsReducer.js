import {
    SET_RECENT_POSTS
} from '../actions/types';

const INIT_STATE = {
    posts: [],
    recentPosts: []
}

export default function(state = INIT_STATE, action) {
    switch (actions.type) {
        case SET_RECENT_POSTS:
            
            return [...state, recentPosts: action.payload]
    
        default:
            return state;
    }
}