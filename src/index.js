import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// rootSaga generator to send request to saga using action type
function* rootSaga() {
    yield takeEvery("GET_PROJECTS", fetchProjects);
    yield takeEvery("GET_TAGS", fetchTags);
    yield takeEvery("ADD_PROJECT", sendProject)
}

function* sendProject(action) {
    //function to send axios request to database to post new projects
    try {
        yield axios.post('api/projects', action.payload);
        // next, trigger new fetchProjects to refresh project list
        yield put({type: 'GET_PROJECTS'})
    } catch(error) {
        yield console.log('error in sendProject', error);
        alert('something went wrong');
    }
}

function* fetchTags() {
    //funtion to get tags from database
    try {
        const tags = yield axios.get('api/tags');
        console.log(tags.data);
        //next, store tags in redux store to use throughout website
        yield put({ type: 'SET_TAGS', payload: tags.data });
    } catch (error) {
        yield console.log('error in fetchTags', error);
        alert('something went wrong');
    }
}

function* fetchProjects() {
    //funtion to get projects from database
    try {
        const projects = yield axios.get('api/projects');
        //next, store projects in redux store to use throughout website
        yield put({type: 'SET_PROJECTS', payload: projects.data});
    } catch (error) {
        yield console.log('error in fetchProjects', error);
        alert('something went wrong');
    }
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
