import reducer from './auth';
import * as asctionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });

    it('should store a token upon login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/' 
        },
        {
            type: asctionTypes.AUTH_SUCCESS,
            idToken: 'some-token',
            userId: 'some-user'
        })).toEqual({
            token: 'some-token',
            userId: 'some-user',
            error: null,
            loading: false,
            authRedirectPath: '/' 
        });
    })
});