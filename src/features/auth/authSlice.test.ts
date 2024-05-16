import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { authSlice, signupUser, loginUser, UserSignupInfo, UserLoginInfo } from './AuthSlice';

describe('authSlice reducer', () => {
    let store: EnhancedStore;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                auth: authSlice.reducer,
            },
        });
    });

    it('should handle initial state', () => {
        expect(store.getState().auth).toEqual({
            status: 'idle',
            value: {},
        });
    });

    it('should handle signupUser.pending', () => {
        const userInfo: UserSignupInfo = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            password: 'password123',
            address: '123 Main St',
            bio: 'Lorem ipsum',
            occupation: 'Developer',
            expertise: 'Frontend',
        };

        // store.dispatch(signupUser(userInfo));

        const state = store.getState().auth;
        expect(state.status).toBe('loading');
    });

    it('should handle signupUser.fulfilled', () => {
        const userInfo: UserSignupInfo = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            password: 'password123',
            address: '123 Main St',
            bio: 'Lorem ipsum',
            occupation: 'Developer',
            expertise: 'Frontend',
        };

        // store.dispatch(signupUser(userInfo));

        const state = store.getState().auth;
        expect(state.status).toBe('idle');
        // Add additional assertions based on your implementation
    });

    it('should handle signupUser.rejected', () => {
        // Add test case for rejected action
    });

    it('should handle loginUser.pending', () => {
        // Add test case for pending action
    });

    it('should handle loginUser.fulfilled', () => {
        // Add test case for fulfilled action
    });

    it('should handle loginUser.rejected', () => {
        // Add test case for rejected action
    });
});
