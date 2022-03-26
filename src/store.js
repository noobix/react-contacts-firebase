import {getFirebase, reactReduxFirebase} from 'react-redux-firebase'
import {getFirestore, reduxFirestore} from 'redux-firestore'
import ContactReducer from './Reducers/ContactReducer'
import config from './firebase/config'
import thunk from 'redux-thunk'
import {createStore, compose, applyMiddleware} from 'redux'

    const store = createStore(ContactReducer, compose(applyMiddleware
            (thunk.withExtraArgument({ getFirebase, getFirestore })),
          reactReduxFirebase(config), reduxFirestore(config)
        )
      );
export default store